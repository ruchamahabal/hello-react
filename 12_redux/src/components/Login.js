import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { LoginUser } from "../slices/userSlice.js";

const Login = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const dispatch = useDispatch();
	const isLoggedIn = useSelector((store) => store.user.isLoggedIn);

	const validateForm = (e) => {
		if (!name) {
			setError("Name is required.");
			return false;
		}

		if (!email) {
			setError("Email is required.");
			return false;
		}

		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			setError("Please enter a valid email address.");
			return false;
		}

		if (!password) {
			setError("Password is required.");
			return false;
		}

		if (password.length < 10) {
			setError("Password must be at least 10 characters long.");
			return false;
		}

		return true;
	};

	const login = (e) => {
		e.preventDefault();

		if (validateForm()) {
			dispatch(LoginUser(name));
			<Navigate to="/" replace />;
		}
	};

	if (isLoggedIn) {
		return <Navigate to="/" replace />;
	}

	return (
		<div className="centered-div">
			<form className="login-form" onSubmit={login}>
				<input
					placeholder="Name"
					className="user-input"
					value={name}
					autoFocus
					onChange={(e) => setName(e.target.value)}
				></input>
				<input
					placeholder="Email"
					className="user-input"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				></input>
				<input
					placeholder="Password"
					className="user-input"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				></input>
				{error && <p className="error">{error}</p>}
				<button>Login</button>
			</form>
		</div>
	);
};

export default Login;
