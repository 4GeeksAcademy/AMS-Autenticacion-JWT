import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { login } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const resp = await fetch(`${import.meta.env.VITE_API_URL}/api/token`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email, password }),
		});
		if (resp.ok) {
			const data = await resp.json();
			login(data.token); // Guarda el token en sessionStorage
			navigate("/private"); // Redirige a la ruta privada
		} else {
			const errorData = await resp.json();
			alert(errorData.msg || "Credenciales incorrectas");
		}
	};

	const handleSignupClick = () => {
		navigate("/signup");
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Iniciar Sesión</h2>
			<input
				type="email"
				placeholder="Correo electrónico"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				required
			/>
			<input
				type="password"
				placeholder="Contraseña"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				required
			/>
			<button type="submit">Entrar</button>
			<div style={{ marginTop: "10px" }}>
				<button type="button" onClick={handleSignupClick}>
					Regístrate aquí
				</button>
			</div>
		</form>
	);
};

export default Login;