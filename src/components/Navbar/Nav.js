import NavBody from "./NavBody";
import NavFooter from "./NavFooter";
import NavHeader from "./NavHeader";
import NavSearch from "./NavSearch";

function Nav({ hidden, toggleHidden }) {
	return (
		<div className={`nav ${hidden ? "hide" : ""}`}>
			<NavHeader />
			<NavSearch hidden={hidden} toggleHidden={toggleHidden} />
			<NavBody />
			<NavFooter />
		</div>
	);
}

export default Nav;
