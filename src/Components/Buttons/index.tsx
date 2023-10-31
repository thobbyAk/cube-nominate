import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";
import {
	ArrowIcon,
	BlackLoadingIcon,
	WhiteLoadingIcon,
} from "../../Assets/Icons";

export interface ButtonProps
	extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, ""> {
	loading?: boolean;
	isDisabled?: boolean;
	name?: string;
}

export const PrimaryButton = ({
	loading,
	isDisabled,
	name,
	className,
	...props
}: ButtonProps) => {
	return (
		<button
			disabled={isDisabled}
			onClick={props.onClick}
			className={` ${
				isDisabled
					? " bg-customGrey-200  "
					: "bg-black hover:border-2 hover:border-black hover:bg-white hover:text-black  "
			} 
         ${className} text-center uppercase h-[50px] w-full font-poppins text-white font-bold text-sm `}
			{...props}
			type={props.type}
			style={{
				boxShadow: "0px 1px 10px 0px rgba(26, 26, 25, 0.08)",
			}}
		>
			{loading ? (
				<div className="flex justify-center">
					<WhiteLoadingIcon />
				</div>
			) : (
				name
			)}
		</button>
	);
};

export const SecondaryButton = ({
	loading,
	isDisabled,
	name,
	className,
	...props
}: ButtonProps) => {
	return (
		<button
			onClick={props.onClick}
			className={` ${
				isDisabled
					? " bg-white border border-2 border-customGrey-200 text-customGrey-200 "
					: "bg-white border border-2 border-black  "
			} 
         ${className} uppercase h-[50px] w-full font-poppins text-black font-bold text-sm hover:border-2 hover:border-customPink-100 hover:bg-white hover:text-black `}
			{...props}
			type={props.type}
			style={{
				boxShadow: "0px 1px 10px 0px rgba(26, 26, 25, 0.08)",
			}}
		>
			{loading ? (
				<div className="flex">
					<BlackLoadingIcon />
				</div>
			) : (
				name
			)}
		</button>
	);
};

export interface IconButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	icon: ReactNode;
	buttonTitle?: ReactNode;
	buttonTitleClassName?: string;
	error?: ReactNode;
	variant?: "contained" | "outlined";
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
	(
		{
			icon,
			buttonTitle,
			buttonTitleClassName,
			error,
			variant = "outlined",
			...props
		},
		ref
	) => {
		return (
			<button
				ref={ref}
				className={`bg-white ${
					error ? "border-[#DC3545] border" : "border-customGrey-100 border"
				} h-[42px] relative flex items-center justify-between gap-8 w-full   p-2  `}
				{...props}
			>
				{buttonTitle && (
					<div className="text-black text-base font-anonpro flex items-center w-full justify-between gap-2">
						{buttonTitle}
					</div>
				)}
				{icon}
			</button>
		);
	}
);

export const DropDownButton = ({
	open,
	...props
}: Omit<IconButtonProps, "icon"> & { open: boolean }) => {
	return (
		<IconButton
			{...props}
			icon={<ArrowIcon className={` ${open ? "rotate-180 " : ""}`} />}
		/>
	);
};
