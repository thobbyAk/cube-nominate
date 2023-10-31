import React, { useEffect, useState } from "react";
import OverviewImage from "../Assets/images/overviewscreen.jpg";
import { EditIcon } from "../Assets/Icons";
import { PrimaryButton } from "../Components/Buttons";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNomination, fetchUpdateNomination } from "../api/nomination";
import { NominationPayload, Nominees } from "../Utils/types";
import toast from "react-hot-toast";
import { useAppStateSelector } from "../services/Store/hooks";

const Preview = () => {
	const navigate = useNavigate();
	const { currentNomination, nominees } = useAppStateSelector(
		(state) => state.nominationState
	);
	const [nomineeSelected, setNomineeSeleted] = useState("");
	const queryClient = useQueryClient();

	const { error, mutate, isPending } = useMutation({
		mutationFn: (payload: NominationPayload) => {
			if (currentNomination.nomination_id) {
				return fetchUpdateNomination(currentNomination.nomination_id, payload);
			} else {
				return createNomination(payload);
			}
		},
		onSuccess: () => {
			toast.success("nomination created successfully");
			queryClient.invalidateQueries({ queryKey: ["nominations"] });
			navigate("/success");
		},
	});

	if (error) console.log("error occured while creating nomination", error);

	useEffect(() => {
		const fetchNomineeNameById = (nomineeId: string) => {
			const selectedNominee = nominees.find(
				(nominee: Nominees) => nominee.nominee_id === nomineeId
			);
			setNomineeSeleted(
				selectedNominee?.last_name + " " + selectedNominee?.first_name
			);
		};

		fetchNomineeNameById(currentNomination.nominee_id);
	}, [currentNomination, nominees]);

	const submitToApi = () => {
		mutate(currentNomination);
	};

	return (
		<div className="min-h-screen flex justify-center py-9 items-center">
			<div className="w-full md:w-[55rem] p-7 bg-white">
				<img src={OverviewImage} className="w-full" alt="overview" />

				<div className="uppercase mt-8 text-center text-black text-base md:text-2xl font-poppins font-bold">
					nomination overview
				</div>
				<div className="font-anonpro text-sm md:text-base text-black my-4 text-center">
					Thank you for taking the time to nominate a fellow cube. Please{" "}
					<br className="hidden md:block" /> check your answers before submitting.
				</div>
				<div className="md:px-14">
					<div className="p-4 md:p-4 mb-2 w-full bg-customGrey-300 flex justify-between align-center">
						<div>
							<div className="text-base text-left text-black font-poppins font-bold">
								Cube’s Name
							</div>
							<div className="text-black text-left font-anonpro text-base">
								{nomineeSelected}
							</div>
						</div>
						<div onClick={() => navigate(-1)}>
							<EditIcon />
						</div>
					</div>
					<div className="p-4 md:p-4 mb-2 w-full bg-customGrey-300 flex justify-between align-center">
						<div>
							<div className="text-base text-left text-black font-poppins font-bold">
								Reason
							</div>
							<div className="text-black text-left font-anonpro text-base">
								{currentNomination.reason}
							</div>
						</div>
						<div onClick={() => navigate(-1)}>
							<EditIcon />
						</div>
					</div>
					<div className="p-4 md:p-4 mb-2 w-full bg-customGrey-300 flex justify-between align-center">
						<div>
							<div className="text-base text-left text-black font-poppins font-bold">
								Thoughts on Current Process
							</div>
							<div className="text-black text-left font-anonpro text-base">
								{currentNomination.process}
							</div>
						</div>
						<div onClick={() => navigate(-1)}>
							<EditIcon />
						</div>
					</div>
				</div>
				<div className=" mt-8 flex justify-center">
					<PrimaryButton
						onClick={submitToApi}
						className=" w-full md:w-72"
						loading={isPending}
						name="submit"
					/>
				</div>
			</div>
		</div>
	);
};

export default Preview;
