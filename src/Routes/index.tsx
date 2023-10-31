import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../Layouts/main";
import LandingPage from "../Pages/landingPage";
import NominationPage from "../Pages/nominationPage";
import Preview from "../Pages/preview";
import NominationSuccess from "../Pages/nominationSuccess";
import MyNomination from "../Pages/myNomination";
import AuthenticationScreen from "../Pages/Authentication/login";
import RegisterScreen from "../Pages/Authentication/register";
import ScrollToTop from "../Utils/scrollToTop";

const AppRoutes = () => {
	return (
		<Router>
			<ScrollToTop />
			<Routes>
				<Route element={<Layout />}>
					<Route path="/get-started" element={<LandingPage />} />
					<Route path="/" element={<AuthenticationScreen />} />
					<Route path="/register" element={<RegisterScreen />} />
					<Route path="/nominate" element={<NominationPage />} />
					<Route path="/preview" element={<Preview />} />
					<Route path="/success" element={<NominationSuccess />} />
					<Route path="/my-nominations" element={<MyNomination />} />
				</Route>
			</Routes>
		</Router>
	);
};

export default AppRoutes;
