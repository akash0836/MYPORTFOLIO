import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import "./Nav.css";

const MainLoyOut = () => {
	return (
		<>
			<Navbar />
			<main>
				<Outlet />
			</main>
		</>
	);
};
export default MainLoyOut;
