import React from "react";
import { SecondaryButton } from "../Buttons";

interface ModalProps {
	open: boolean;
	header?: string;
	body?: string;
	action?: string;
	isLoading?: boolean;
	onClose: () => void;
	setAction: () => void;
}

const Modal = ({
	open,
	onClose,
	setAction,
	header,
	isLoading,
	body,
	action,
}: ModalProps) => {
	if (!open) {
		return null;
	}
	return (
		<div className="fixed inset-0 flex items-center justify-center z-50">
			<div className="fixed inset-0 bg-black opacity-50"></div>
			<div className="relative z-10 bg-white w-450">
				<div className="p-8">
					<div className="text-black mb-3 uppercase text-left font-poppins text-lg font-bold">
						{header}
					</div>
					<div className="text-base mb-12 font-anonpro text-black text-left">
						{body}
					</div>
				</div>
				<div className="shadow-3xl">
					<div className=" p-8 flex flex-col">
						<SecondaryButton loading={isLoading} onClick={setAction} name={action} />
						<SecondaryButton onClick={onClose} name="cancel" className="mt-4" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
