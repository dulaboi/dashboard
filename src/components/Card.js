import { useTheme } from "../context/ThemeContext";

function Card({ children, title }) {
	const { darkMode, changeTheme } = useTheme();
	return (
		<div className="card">
			<div className="theme">
				<i onClick={changeTheme} className={`bi bi-${darkMode ? "sun" : "moon"}`}></i>
			</div>
			<div className="header">
				<i className="bi bi-vinyl-fill"></i>
				<h3>{title}</h3>
			</div>
			<div className="body">{children}</div>
		</div>
	);
}

export default Card;
