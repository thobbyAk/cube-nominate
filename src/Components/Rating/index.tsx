import React, { ReactNode } from "react";
import ratingArray from "../../Utils/ratingArray";

export interface RateTypes {
	icon: ReactNode;
	value: string;
	text: string;
	rate: number;
}
const Rating = ({
	selectedRate,
	onRatingSelect,
}: {
	onRatingSelect: (rating: RateTypes) => void;
	selectedRate: RateTypes;
}) => {
	const handleRatingClick = (rating: RateTypes) => {
		onRatingSelect(rating);
	};

	return (
		<div className="text-center">
			<div className="h-0.5 mb-9">
				<div className="relative w-full  h-1.5 bg-customGrey-200">
					<div
						className="absolute h-full bg-customPink-200"
						style={{ width: `${selectedRate?.rate}%` }}
					>
						<div className="w-4 h-4 bg-customPink-200 rounded-full absolute right-0 top-px transform translate-x-1/2 -translate-y-1/2"></div>
					</div>
				</div>
			</div>

			<div className="flex mt-4 justify-around hidden md:flex md:px-4">
				{ratingArray?.map((rating) => (
					<div
						className="flex justify-center flex-col"
						key={rating.value}
						onClick={() => handleRatingClick(rating)}
					>
						<div
							className={`${
								selectedRate?.value === rating.value
									? "border-2 border-customPink-200"
									: ""
							} mb-3 bg-customGrey-300 mx-auto flex align-center  cursor-pointer p-3 justify-center w-16 `}
						>
							<img src={rating.icon} className="w-9 md:h-9 " alt={rating.value} />
						</div>
						<div
							className={`${
								selectedRate?.value === rating.value
									? "text-[#333] text-center text-xs md:text-base font-anonpro font-bold"
									: "text-[#333] text-center text-xs md:text-base font-anonpro"
							}`}
						>
							{rating.text}
						</div>
					</div>
				))}
			</div>
			<div className="md:hidden block">
				{ratingArray?.map((rating) => (
					<div
						key={rating.value}
						onClick={() => handleRatingClick(rating)}
						className={` mb-3 border cursor-pointer  ${
							selectedRate?.value === rating.value
								? "border-customGrey-100 shadow-3xl"
								: "border-customGrey-200"
						} items-center  items-center flex justify-between w-full bg-white p-3
						`}
					>
						<div className="flex items-center flex-row">
							<img
								src={rating.icon}
								className="w-[30px] mr-3 md:h-[30px] "
								alt={rating.value}
							/>

							<div className="text-[#333] text-center text-base font-poppins font-bold">
								{rating.text}
							</div>
						</div>
						<div
							className={`rounded-full border ${
								selectedRate?.value === rating.value
									? "border-customPink-100"
									: "border-customGrey-100 "
							} p-0.5`}
						>
							<div
								className={`w-6 h-6 rounded-full  p-2  right-4 ${
									selectedRate?.value === rating.value
										? "bg-customPink-100"
										: "bg-transparent"
								}`}
							></div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Rating;
