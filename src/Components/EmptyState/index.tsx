import React from "react";
import { PrimaryButton } from "../Buttons";
import { useNavigate } from "react-router-dom";
import { GreyInboxIcon } from "../../Assets/Icons";

const EmptyNomination = () => {
	const navigate = useNavigate();
	return (
		<div className=" md:py-12 flex justify-center items-center">
			<div className="w-full bg-white items-center flex justify-center flex-col  md:w-[55rem] px-4">
				<div className="flex mb-8 mt-12 justify-center">
					<GreyInboxIcon />
				</div>
				<div className="p-5">
					<div className="font-anonpro text-sm md:text-base text-black md:my-4 text-center">
						once you submit a <br className="md:block hidden" /> nomination, you will
						be able <br className="md:block hidden" /> to view and edit it here.
						<div className="flex mt-12 justify-center">
							<PrimaryButton
								onClick={() => navigate("/get-started")}
								className=" w-full md:w-72"
								name="CREATE NEW NOMINATION"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EmptyNomination;
