import axios from "axios";

const instance = axios.create({
	baseURL: "https://f19b-176-44-59-43.eu.ngrok.io",
	headers: { "Content-Type": "application/json" },
});

async function serverLogin(username, password) {
	try {
		const { data } = await instance.post("/auth/login", { username, password });
		return { token: data.jwt, error: false };
	} catch (err) {
		const { message } = err.response.data;
		return { message, error: true };
	}
}

async function serverSignup(username, password) {
	try {
		const { data } = await instance.post("/auth/createUser", { username, password });
		return { token: data.jwt, error: false };
	} catch (err) {
		const { message } = err.response.data;
		return { message, error: true };
	}
}

async function serverAuthenticate(token) {
	try {
		const { data } = await instance.post("/auth/auth", { jwt: token });
		return { username: data.username, error: false };
	} catch (err) {
		const { message } = err.response.data;
		return { message, error: true };
	}
}

export { serverLogin, serverSignup, serverAuthenticate };
