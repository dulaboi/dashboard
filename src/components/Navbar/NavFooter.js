import { useTheme } from "../../context/ThemeContext";
import { useUser } from "../../context/UserContext";

function NavFooter() {
	const { darkMode, changeTheme } = useTheme();
	const { logout } = useUser();

	return (
		<div className="footer">
			<div className="theme">
				<i onClick={changeTheme} className={`bi bi-${darkMode ? "sun" : "moon"}`}></i>
			</div>
			<hr />
			<div onClick={logout} className="logout">
				<span>Logout</span>
				<i className="bi bi-arrow-left-square"></i>
			</div>
		</div>
	);
}

export default NavFooter;
