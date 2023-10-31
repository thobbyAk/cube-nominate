import { ReactNode } from "react";
import { useAppStateSelector } from "./services/Store/hooks";
import { configureAxios } from "./api";

interface Props {
	children: ReactNode;
}

const InitAxios = ({ children }: Props) => {
	const authState = useAppStateSelector((state) => state.authState);
	const token = sessionStorage.getItem("accessToken");

	configureAxios({
		accessToken: token ?? authState.token,
	});
	return <>{children}</>;
};

export default InitAxios;
