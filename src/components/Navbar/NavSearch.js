function NavSearch({ hidden, toggleHidden }) {
	return (
		<div className="search">
			<i
				className="bi bi-search"
				onClick={() => {
					if (hidden) {
						toggleHidden();
						document.getElementById("searchBar").focus();
					}
				}}
			/>
			<input id="searchBar" placeholder="Search..." />
			<i
				id="navToggler"
				className={`bi bi-arrow-${hidden ? "right" : "left"}-square-fill`}
				onClick={() => {
					toggleHidden();
				}}
			/>
		</div>
	);
}

export default NavSearch;
