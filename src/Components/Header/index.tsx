import React from "react";
import DesktopLogo from "../../Assets/images/big-logo.png";
import MobileLogo from "../../Assets/images/small-logo.png";
import { InboxIcon, PlusIcon } from "../../Assets/Icons";
import { useNavigate } from "react-router-dom";
import { useAppStateSelector } from "../../services/Store/hooks";

const Header = () => {
	const navigate = useNavigate();
	const { nominations } = useAppStateSelector((state) => state.nominationState);
	return (
		<div className="sticky top-0 bg-black p-4 z-10 flex justify-between items-center">
			<div onClick={() => navigate("/")} className="cursor-pointer">
				<img src={DesktopLogo} className="hidden md:block " alt="" />
				<img src={MobileLogo} className="md:hidden  " alt="" />
			</div>
			<div
				onClick={() => navigate("/my-nominations")}
				className="text-white cursor-pointer font-anonpro hidden md:block text-base font-bold underline"
			>
				Your Nominations ({nominations?.length})
			</div>
			<div className="md:hidden flex items-center">
				<div className="mr-4">
					<PlusIcon />
				</div>
				<div className="">
					<InboxIcon />
				</div>
			</div>
		</div>
	);
};

export default Header;
