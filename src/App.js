import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import MainLoyOut from "./Components/Layout/Headers";
import Skills from "./Components/Skills/Skill";
import Work from "./Components/Work/Work";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<MainLoyOut />}>
					<Route
						path="/Home"
						element={<Home />}
					/>
					<Route
						path="/About"
						element={<About />}
					/>
					<Route
						path="/Skills"
						element={<Skills />}
					/>
					<Route
						path="/Work"
						element={<Work />}
					/>
					<Route
						path="/Contact"
						element={<Contact />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
