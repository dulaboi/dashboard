import { useState } from "react";

import Card from "../components/Card";
import { useUser } from "../context/UserContext";
import { validatePassword } from "../helpers/AuthInputValidation";

function LoginPage() {
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
	const [showPassword, toggleShowPassword] = useState(false);
	const [confirmPassword, setConfirmPassword] = useState("");
	const [newAccount, toggleNewAccount] = useState(false);
	const [showErrMsg, setShowErrMsg] = useState(false);
	const [errMsg, setErrMsg] = useState("");

	const { login, signup } = useUser();

	function displayErrorMessage(message) {
		clearInputs();
		setShowErrMsg(true);
		setErrMsg(message);
		setTimeout(() => {
			setShowErrMsg(false);
			setErrMsg("");
		}, 3000);
	}

	async function submitLogin() {
		if (username === "" || password === "") return displayErrorMessage("Completed all fields please.");
		const res = await login(username, password);

		if (res.error) displayErrorMessage(res.message);
	}

	async function submitSignup() {
		if (username === "" || password === "") return displayErrorMessage("Completed all fields please.");
		if (password !== confirmPassword) {
			clearPasswords();
			return displayErrorMessage("Passwords do not match.");
		}

		if (validatePassword(password)) {
			const res = await signup(username, password);
			if (res.error) displayErrorMessage(res.message);
		} else {
			clearPasswords();
			displayErrorMessage("Password must be 8 characters.");
		}
	}

	function clearPasswords() {
		document.getElementById("password").value = "";
		const confirmPwd = document.getElementById("confirmPassword");
		if (confirmPwd) confirmPwd.value = "";
	}

	function clearInputs() {
		document.getElementById("username").value = "";
		clearPasswords();
	}

	function toggleForm() {
		toggleNewAccount(!newAccount);
	}

	return (
		<div className="main-page">
			<Card title={newAccount ? "Create an Account" : "Login"}>
				{showErrMsg && <div className="errMsg">{errMsg}</div>}
				<input
					id="username"
					type="text"
					onChange={e => setUsername(e.target.value)}
					placeholder="Enter your username..."
				/>
				<input
					id="password"
					type={showPassword ? "text" : "password"}
					onChange={e => setPassword(e.target.value)}
					placeholder="Enter your password..."
				/>
				{newAccount && (
					<input
						id="confirmPassword"
						type={showPassword ? "text" : "password"}
						onChange={e => setConfirmPassword(e.target.value)}
						placeholder="Confirm your password..."
					/>
				)}
				<i
					id="passwordViewer"
					className={showPassword ? "bi bi-three-dots" : "bi bi-123"}
					onClick={() => toggleShowPassword(!showPassword)}
				/>
				<button onClick={newAccount ? submitSignup : submitLogin}>{newAccount ? "SIGN UP" : "LOGIN"}</button>
				<span onClick={toggleForm}>{newAccount ? "Login with your account" : "Don't have an account?"}</span>
			</Card>
		</div>
	);
}

export default LoginPage;
