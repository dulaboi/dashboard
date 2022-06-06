import { useState, createContext, useContext } from "react";
import { serverLogin, serverSignup, serverAuthenticate } from "../api";
import { get, remove, save } from "../helpers/SaveToLocalStorage";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

const AUTH = "AUTH";
const USERNAME = "USERNAME";

export function UserProvider({ children }) {
	const [user, setUser] = useState(null);

	function logout() {
		setUser(null);
		remove(AUTH);
		remove(USERNAME);
	}

	async function login(username, password) {
		// On Success: res = { token, error: false }
		// On Failure: res = { message, error: true }
		const res = await serverLogin(username, password);

		if (res.error) return res;

		const { token } = res;
		save(AUTH, token);
		save(USERNAME, username);
		setUser(username);
		return res;
	}

	async function signup(username, password) {
		// On Success: res = { token, error: false }
		// On Failure: res = { message, error: true }
		const res = await serverSignup(username, password);
		if (res.error) return res;

		const { token } = res;
		save(AUTH, token);
		save(USERNAME, username);
		setUser(username);
		return res;
	}

	async function authenticate() {
		const token = get(AUTH);
		const username = get(USERNAME);
		if (!token) return null;

		const res = await serverAuthenticate(token);
		if (res.error) {
			logout();
			return res;
		}
		setUser(username);
	}

	return <UserContext.Provider value={{ user, logout, login, signup, authenticate }}>{children}</UserContext.Provider>;
}
