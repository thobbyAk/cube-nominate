import {
	createRef,
	useEffect,
	useState,
	ReactNode,
	HTMLProps,
	useMemo,
} from "react";

import { v4 } from "uuid";

import { DropDownButton } from "../Buttons";

export interface DropdownProps
	extends Omit<HTMLProps<HTMLDivElement>, "content" | "onClick"> {
	content: ReactNode;
	contentClassName?: string;
	externalToggle?: boolean;
	open?: boolean;
	handleClose?: () => void;

	contentWidth?: boolean;
}

export const Dropdown = ({
	children,
	content,
	contentClassName,
	externalToggle = false,
	open,
	contentWidth = false,
	handleClose,
	...props
}: DropdownProps & { children: ReactNode }) => {
	const [visible, setVisible] = useState(false);
	const [position, setPsition] = useState("left-0");

	const ref = createRef<HTMLDivElement>();

	useEffect(() => {
		if (ref.current) {
			const rect = ref.current.getBoundingClientRect();
			const screenWidth = window.innerWidth;
			if (rect.right > screenWidth / 2) {
				setPsition("right-0");
			} else {
				setPsition("left-0");
			}
		}
		const handleClick = (event: any) => {
			if (!ref.current?.contains(event.target)) {
				if (externalToggle) {
					handleClose && handleClose();
				} else {
					setVisible(false);
				}
			}
		};
		document.addEventListener("click", handleClick);
		return () => {
			document.removeEventListener("click", handleClick);
		};
	}, [ref, setVisible, handleClose, externalToggle]);

	const show = externalToggle ? open : visible;

	return (
		<div className="relative" ref={ref} {...props}>
			<div className="w-full">{children}</div>
			{show && (
				<div
					className={`w-full absolute z-[1] bg-white rounded-lg max-h-80 overflow-y-auto ${
						contentWidth && "w-max"
					} ${position} ${contentClassName}`}
				>
					{content}
				</div>
			)}
		</div>
	);
};

export const DropdownContentContaner = ({
	children,
}: {
	children: ReactNode;
}) => {
	return <div className=" pb-0">{children}</div>;
};

export const MenuItemContainer = ({
	className,
	...props
}: HTMLProps<HTMLDivElement>) => {
	return (
		<div
			className={`flex items-center p-2 h-[42px] bg-customGrey-300 cursor-pointer font-anonpro text-base leading-5  mb-0.5 ${className}`}
			{...props}
		>
			{props.children}
		</div>
	);
};

export interface SelectDropdownOption {
	label: string;
	value: any;
}
export interface SelectDropdownProps {
	open: boolean;
	error?: ReactNode;
	setOpen: any;
	options: SelectDropdownOption[];
	onChange: (value: any) => void;
	selectedValue?: string;
	placeholder?: string;
}

export const SelectDropDown = ({
	open,
	setOpen,
	options,
	error,
	onChange,
	placeholder,
	selectedValue,
}: SelectDropdownProps) => {
	const ID = useMemo(() => v4(), []);

	const selectedLabel = useMemo(
		() => options?.find((item) => item?.value === selectedValue)?.label,
		[selectedValue, options]
	);

	return (
		<Dropdown
			externalToggle={true}
			handleClose={() => setOpen(false)}
			open={open}
			content={
				<DropdownContentContaner>
					{options?.map((option, index) => {
						return (
							<MenuItemContainer
								key={`${ID}_${index}`}
								onClick={() => {
									onChange(option.value);
									setOpen(false);
								}}
							>
								{option.label}
							</MenuItemContainer>
						);
					})}
				</DropdownContentContaner>
			}
		>
			<DropDownButton
				open={open}
				error={error}
				buttonTitle={selectedLabel || placeholder}
				onClick={() => setOpen(!open)}
				type="button"
				buttonTitleClassName="text-base leading-6 font-normal"
			/>
		</Dropdown>
	);
};
