import { useEffect, useState } from "react";
import Nav from "../components/Navbar/Nav";
import Body from "./Body";

function Dashboard() {
	const [hidden, changeHidden] = useState(false);

	function toggleHidden() {
		const searchBar = document.getElementById("searchBar");
		if (hidden) {
			searchBar.style.display = "inline-block";
		} else {
			searchBar.style.display = "none";
		}
		changeHidden(!hidden);
	}

	useEffect(() => {
		const dashboard = document.getElementById("dashboard");
		let navWidth = "20";
		let bodyWidth = "80";
		if (hidden) {
			navWidth = "6";
			bodyWidth = "94";
		}
		dashboard.style.gridTemplateColumns = `${navWidth}% ${bodyWidth}%`;
	}, [hidden]);

	return (
		<div id="dashboard" className="dashboard">
			<Nav hidden={hidden} toggleHidden={toggleHidden} />
			<Body />
		</div>
	);
}

export default Dashboard;
