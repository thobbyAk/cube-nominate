import React from "react";
import { SecondaryButton } from "../Components/Buttons";
import Screen from "../Assets/images/submitscreen.jpg";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../services/Store/hooks";
import { handleSubmitNomination } from "../services/Reducers/nominationsReducer";

const NominationSuccess = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const handleNewNomination = () => {
		dispatch(handleSubmitNomination({}));
		navigate("/nominate");
	};
	return (
		<div className="min-h-screen flex justify-center items-center">
			<div className="w-full md:w-[55rem] px-4">
				<img src={Screen} className="w-full" alt="home" />
				<div className="bg-white p-5">
					<div className="uppercase text-center text-black text-base md:text-2xl font-poppins font-bold">
						NOMINATION SUBMITTED
					</div>
					<div className="font-anonpro text-sm md:text-base text-black my-4 text-center">
						Thank you for taking the time to fill out this form! Why not{" "}
						<br className="hidden md:block" /> nominate another cube?
					</div>
					<div className="flex md:flex-row flex-col justify-center">
						<SecondaryButton
							onClick={() => navigate("/my-nominations")}
							className="md:mr-4 mb-4 w-full md:w-72"
							name="VIEW nominations"
						/>
						<SecondaryButton
							onClick={handleNewNomination}
							className=" w-full md:w-72"
							name="CREATE NEW NOMINATION"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NominationSuccess;
