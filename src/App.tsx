import { Toaster } from "react-hot-toast";
import AppRoutes from "./Routes";

function App() {
	return (
		<>
			<Toaster position="top-right" />
			<AppRoutes />
		</>
	);
}

export default App;
