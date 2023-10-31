import React, { useEffect, useState } from "react";
import { SelectDropDown } from "../Components/Dropdown";
import { FormGroup } from "../Components/Inputs";
import * as yup from "yup";
import { PrimaryButton, SecondaryButton } from "../Components/Buttons";
import NominateImage from "../Assets/images/formscreen.jpg";
import Rating, { RateTypes } from "../Components/Rating";
import Modal from "../Components/Modal";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAllNominees } from "../api/nomination";
import { Nominees } from "../Utils/types";
import { useAppDispatch, useAppStateSelector } from "../services/Store/hooks";
import {
	handleSetNominees,
	handleSubmitNomination,
} from "../services/Reducers/nominationsReducer";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ratingArray from "../Utils/ratingArray";

const schema = yup.object().shape({
	nominee_id: yup.string().required("Please select a nominee"),
	reason: yup.string().required("Please enter your reason"),
	process: yup.string().required("Please rate this process"),
});

const NominationPage = () => {
	const [openSelectCubeName, setOpenSelectCubeName] = useState(false);
	const [cubeName, setCubeName] = useState("");
	const [nomineeSelected, setNomineeSeleted] = useState("");
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [openConfirmModal, setOpenConfimModal] = useState(false);
	const { nominees, currentNomination } = useAppStateSelector(
		(state) => state.nominationState
	);

	const { data, error } = useQuery({
		queryKey: ["nominees"],
		queryFn: () => getAllNominees(),
	});

	const {
		handleSubmit,
		formState: { errors },
		setValue,
		register,
	} = useForm({
		resolver: yupResolver(schema),
	});

	const [selectedRating, setSelectedRating] = useState<RateTypes>({
		icon: <></>,
		value: "",
		rate: 0,
		text: "",
	});

	const nominessOptions = nominees?.map((item: Nominees) => ({
		label: item.last_name + " " + item.first_name,
		value: item.nominee_id,
	}));

	useEffect(() => {
		dispatch(handleSetNominees(data?.data));
	}, [data?.data, dispatch]);

	if (error) {
		console.log("a getnomminness error occurred" + error);
	}

	const handleRatingSelect = (rating: RateTypes) => {
		setSelectedRating(rating);
		setValue("process", rating.value);
	};

	const handleGoBack = () => {
		setOpenConfimModal(false);
		dispatch(handleSubmitNomination({}));
		navigate(-1);
	};

	const fetchNomineeNameById = (nomineeId: string) => {
		const selectedNominee = nominees?.find(
			(nominee: Nominees) => nominee.nominee_id === nomineeId
		);
		if (selectedNominee?.last_name && selectedNominee?.first_name) {
			setNomineeSeleted(
				selectedNominee?.last_name + " " + selectedNominee?.first_name
			);
		}
	};

	useEffect(() => {
		if (currentNomination) {
			setValue("reason", currentNomination.reason);
			setValue("nominee_id", currentNomination.nominee_id);
			setValue("process", currentNomination.process);
			setCubeName(currentNomination.nominee_id);
			if (currentNomination.nominee_id !== "")
				fetchNomineeNameById(currentNomination.nominee_id);

			const currentRating = ratingArray.find(
				(rating: RateTypes) => rating.value === currentNomination.process
			);
			if (currentRating) setSelectedRating(currentRating);
		}
	}, [currentNomination, setValue]);

	const onSubmit = async (data: any) => {
		if (currentNomination?.nomination_id) {
			const payload = {
				nomination_id: currentNomination?.nomination_id,
				...data,
			};
			dispatch(handleSubmitNomination(payload));
		} else {
			dispatch(handleSubmitNomination(data));
		}

		navigate("/preview");
	};

	return (
		<>
			<div className="min-h-screen flex justify-center py-9 items-center">
				<div className="w-full md:w-[55rem] p-7 bg-white">
					<img src={NominateImage} className="w-full" alt="form" />
					<div className=" mt-4 uppercase text-left text-black text-base md:text-xl font-poppins font-bold">
						I’d like to nominate...{" "}
					</div>
					<div className="font-anonpro text-sm md:text-base text-black my-4 text-left">
						Please select a cube who you feel has done something honourable{" "}
						<br className="hidden md:block" /> this month or just all round has a
						great work ethic.
					</div>
					<div className=" flex justify-center flex-col">
						<form onSubmit={handleSubmit(onSubmit)}>
							<FormGroup className="md:w-[400px] w-full" required label="Cube's name">
								<SelectDropDown
									error={errors.nominee_id && cubeName === " " ? true : false}
									setOpen={setOpenSelectCubeName}
									open={openSelectCubeName}
									onChange={(value) => {
										setValue("nominee_id", value);
										setCubeName(value);
										fetchNomineeNameById(value);
									}}
									placeholder="Select Option"
									selectedValue={cubeName}
									options={nominessOptions}
								/>
								{errors.nominee_id && cubeName === "" && (
									<p className="text-base text-[#DC3545] font-normal">
										{errors.nominee_id?.message}
									</p>
								)}
							</FormGroup>

							<div className="my-12 h-px bg-customGrey-200"></div>
							<div className="  uppercase text-left text-black text-base md:text-xl font-poppins font-bold">
								I’d like to nominate{" "}
								<span className="text-customPink-100">{nomineeSelected ?? "-"}</span>{" "}
								because...{" "}
							</div>
							<div className="font-anonpro text-sm md:text-base text-black my-4 text-left">
								Please let us know why you think this cube deserves the ‘cube of the{" "}
								<br className="hidden md:block" /> month’ title 🏆⭐
							</div>
							<FormGroup required label="Reasoning">
								<textarea
									{...register("reason")}
									className={` ${
										errors.reason
											? "border-[#DC3545] border "
											: "border border-customGrey-100 focus:border focus:border-black"
									} w-full caret-customPink-100 font-anonpro  text-base p-2 focus:outline-none`}
									placeholder="Reasoning"
									rows={5}
								></textarea>
								{errors.reason && (
									<p className="text-base text-[#DC3545] font-normal">
										{errors.reason?.message}
									</p>
								)}
							</FormGroup>

							<div className="my-12 h-px bg-customGrey-200"></div>

							<div className="  uppercase text-left text-black text-base md:text-xl font-poppins font-bold">
								IS HOW WE CURRENTLY RUN CUBE OF THE MONTH{" "}
								<br className="hidden md:block" /> FAIR?
							</div>
							<div className="font-anonpro text-sm md:text-base text-black my-4 text-left">
								As you know, out the nominees chosen, we spin a wheel to pick the{" "}
								<br className="hidden md:block" /> cube of the month. What’s your
								opinion on this method?
							</div>
							<div className="rate">
								<Rating
									selectedRate={selectedRating}
									onRatingSelect={handleRatingSelect}
								/>
								{errors.process && selectedRating.value === "" && (
									<p className="text-base text-center text-[#DC3545] font-normal">
										{errors.process?.message}
									</p>
								)}
							</div>

							<div className="flex mt-12 md:justify-between md:flex-row flex-col">
								<div className="md:w-[104px] mb-4 w-full ">
									<SecondaryButton
										type="button"
										onClick={() => setOpenConfimModal(true)}
										name="Back"
									/>
								</div>
								<div className="md:w-[222px] w-full ">
									<PrimaryButton
										type="submit"
										name="Next"
										isDisabled={
											!!errors.reason || selectedRating?.value === "" || cubeName === ""
										}
									/>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>

			<Modal
				header="Are you sure?"
				body="If you leave this page, you will lose any progress made."
				action="Yes, leave page"
				setAction={handleGoBack}
				open={openConfirmModal}
				onClose={() => setOpenConfimModal(false)}
			/>
		</>
	);
};

export default NominationPage;
