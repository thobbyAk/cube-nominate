import React from "react";
import { PrimaryButton } from "../Components/Buttons";

import Screen from "../Assets/images/screen.png";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
	const navigate = useNavigate();

	return (
		<div className="min-h-screen flex justify-center items-center">
			<div className="w-full md:w-[55rem] px-4">
				<img src={Screen} className="w-full" alt="home" />
				<div className="bg-white p-5">
					<div className="uppercase text-center text-black text-base md:text-2xl font-poppins font-bold">
						CUBE OF THE MONTH NOMINATIONS
					</div>
					<div className="font-anonpro text-sm md:text-base text-black my-4 text-center">
						At cube we’re passionate about recognising the great work that our cubes
						do. Each month one of our cubes are crowned cube of the month 👑⭐. Please
						nominate who you think deserves this months title.
					</div>
					<div className="flex justify-center">
						<PrimaryButton
							onClick={() => navigate("/nominate")}
							className=" w-full md:w-72"
							isDisabled={false}
							name="get started"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
