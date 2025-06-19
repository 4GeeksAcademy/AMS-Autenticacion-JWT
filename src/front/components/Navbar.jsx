import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
	const { isAuthenticated, logout } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleAuthClick = () => {
		if (isAuthenticated) {
			logout();
			navigate("/");
		} else {
			navigate("/login");
		}
	};

	return (
		<nav
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				padding: "10px 20px",
				background: "#eee",
			}}
		>
			<div style={{ display: "flex", gap: "10px" }}>
				<Link to="/">Inicio</Link>
				{isAuthenticated && <Link to="/private">Privado</Link>}
			</div>
			<button onClick={handleAuthClick}>
				{isAuthenticated ? "Cerrar sesión" : "LogIn"}
			</button>
		</nav>
	);
};

export default Navbar;