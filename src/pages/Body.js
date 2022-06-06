import { useUser } from "../context/UserContext";

function Body() {
	const { user } = useUser();
	const username = user.charAt(0).toUpperCase() + user.slice(1);
	return (
		<div className="body">
			<h2>Welcome, {username}!</h2>
		</div>
	);
}

export default Body;
