import { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";

import Dashboard from "./Dashboard";
import LoginPage from "./LoginPage";

function Loader() {
	return (
		<div className="loading-page">
			<div className="loading"></div>
		</div>
	);
}

function Main() {
	const [loading, setLoading] = useState(true);
	const { user, authenticate } = useUser();

	useEffect(() => {
		async function fetchData() {
			await authenticate();
			setLoading(false);
		}

		fetchData();
		// Following comment is to remove the 'missing dependency' warning
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <>{loading ? <Loader /> : user ? <Dashboard /> : <LoginPage />}</>;
}

export default Main;
