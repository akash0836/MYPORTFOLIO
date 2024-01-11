import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./Nav.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const style = {
	position: "absolute",
	width: "100%",
	bgcolor: "background.paper",
	boxShadow: 24,
	// p: 2,
	height: "100vh",
};

const withoutScroll = {
	height: "60px",
	background: "white",
};
const withScroll = {
	height: "60px",
	boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
	background: "white",
};

const Navbar = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const [top, setTop] = useState(true);
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	useEffect(() => {
		if (location.pathname === "/") {
			navigate("/Home");
		}
		const scrollHandler = () => {
			window.scrollY > 10 ? setTop(false) : setTop(true);
		};
		window.addEventListener("scroll", scrollHandler);
		return () => window.removeEventListener("scroll", scrollHandler);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [top]);

	return (
		<>
			<nav
				className="navbar navbar-expand-lg fixed-top"
				style={top ? withoutScroll : withScroll}>
				<div className="container-fluid">
					<p className="navbar-brand mx-5">Akash</p>
					<div
						className="navbar-toggler"
						type="button"
						onClick={handleClickOpen}
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</div>
					<div
						className="collapse navbar-collapse justify-content-end"
						id="navbarNavAltMarkup">
						<div className="navbar-nav ">
							<NavLink
								className={location.pathname === "/Home" ? "nav-link activeted textStyle" : "nav-link"}
								to={"/Home"}>
								Home
							</NavLink>
							<NavLink
								className={location.pathname === "/About" ? "nav-link activetedAbout textStyle" : "nav-link"}
								to={"/About"}>
								About
							</NavLink>
							<NavLink
								className={location.pathname === "/Skills" ? "nav-link activetedSkill textStyle" : "nav-link"}
								to={"/Skills"}>
								Skills
							</NavLink>
							<NavLink
								className={location.pathname === "/Work" ? "nav-link activetedWork textStyle" : "nav-link"}
								to={"/Work"}>
								Work
							</NavLink>
							<NavLink
								className={location.pathname === "/Contact" ? "nav-link actiContact textStyle" : "nav-link"}
								to={"/Contact"}>
								Contact Me
							</NavLink>
						</div>
					</div>
					{/* nav for mobile */}
					<Modal
						open={open}
						onClose={handleClose}
						style={{ background: "rgba(9, 9, 9, 0.9)" }}
						aria-labelledby="modal-modal-title"
						aria-describedby="modal-modal-description">
						<Box>
							<div className="text-end mx-1 fs-1">
								<FontAwesomeIcon
									onClick={handleClose}
									icon={faXmark}
									style={{ color: "white", cursor: "pointer" }}
								/>
							</div>
							<Box sx={style}>
								<NavLink
									className={location.pathname === "/Home" ? "nav-link activeted textStyle" : "nav-link"}
									style={{ fontSize: "20px", marginTop: "10px" }}
									onClick={handleClose}
									to={"/Home"}>
									Home
								</NavLink>
								<NavLink
									className={location.pathname === "/About" ? "nav-link activetedAbout textStyle" : "nav-link"}
									style={{ fontSize: "20px", marginTop: "10px" }}
									onClick={handleClose}
									to={"/About"}>
									About
								</NavLink>
								<NavLink
									className={location.pathname === "/Skills" ? "nav-link activetedSkill textStyle" : "nav-link"}
									style={{ fontSize: "20px", marginTop: "10px" }}
									onClick={handleClose}
									to={"/Skills"}>
									Skills
								</NavLink>
								<NavLink
									className={location.pathname === "/Work" ? "nav-link activetedWork textStyle" : "nav-link"}
									style={{ fontSize: "20px", marginTop: "10px" }}
									onClick={handleClose}
									to={"/Work"}>
									Work
								</NavLink>
								<NavLink
									className={location.pathname === "/Contact" ? "nav-link actiContact textStyle" : "nav-link"}
									style={{ fontSize: "20px", marginTop: "10px" }}
									onClick={handleClose}
									to={"/Contact"}>
									Contact Me
								</NavLink>
							</Box>
						</Box>
					</Modal>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
