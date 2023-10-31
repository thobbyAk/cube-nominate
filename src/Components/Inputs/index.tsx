import { HTMLProps, ReactNode, forwardRef } from "react";

export interface InputProps extends HTMLProps<HTMLInputElement> {
	iconLeft?: ReactNode;
	iconRight?: ReactNode;
	error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{ onChange, className, iconLeft, iconRight, style, error, ...props },
		ref
	) => {
		return (
			<>
				<div
					className={`border-none outline-none relative w-full h-full ${
						className ?? ""
					} ${props.disabled ? "disabled" : ""} ${iconLeft ? "pl-0" : ""} ${
						iconRight ? "pr-0" : ""
					}`}
					style={style}
				>
					{iconLeft && (
						<div className="relative z-10 px-10 flex items-center justify-center mr-auto">
							{iconLeft}
						</div>
					)}
					<input
						className={`${
							error
								? "border-[#DC3545] border"
								: "border border-customGrey-100 focus:border focus:border-black"
						} caret-customPink-100 w-full font-anonpro  px-4 py-2 placeholder-[rgba(0,0,0,0.6)] text-base text-black placeholder-opacity-75  focus:outline-none bg-white `}
						value={props.value}
						onChange={onChange}
						{...props}
						ref={ref}
					/>
					{iconRight && (
						<div className="absolute top-3 bottom-0 right-0 flex  pr-3 pointer-events-none">
							{iconRight}
						</div>
					)}
					{error && <p className="text-base text-[#DC3545] font-normal">{error}</p>}
				</div>
			</>
		);
	}
);

export interface FormGroupProps {
	children: ReactNode;
	htmlFor?: string;
	label?: ReactNode;
	className?: string;
	required?: boolean;
}

export const FormGroup = ({
	children,
	htmlFor,
	label,
	required,
	className,
}: FormGroupProps) => {
	return (
		<div className={`  ${className ? className : ""}`}>
			<label
				className="block mb-1.5 font-poppins text-base font-bold text-black line-height-6 letter-spacing-0.3 flex"
				htmlFor={htmlFor}
			>
				{" "}
				<span
					className={`${
						required ? "block text-customPink-100 text-base" : "hidden"
					}`}
				>
					*
				</span>{" "}
				{label}
			</label>
			{children}
		</div>
	);
};
