function NavBody() {
	return (
		<div className="body">
			<ul>
				<li>
					<i className="bi bi-house-fill"></i>
					<span>Home</span>
				</li>
				<li>
					<i className="bi bi-bell-fill"></i>
					<span>Notifications</span>
				</li>
				<li>
					<i className="bi bi-chat-fill"></i>
					<span>Messages</span>
				</li>
				<li>
					<i className="bi bi-gear-fill"></i>
					<span>Settings</span>
				</li>
				<li>
					<i className="bi bi-info-circle-fill"></i>
					<span>Help</span>
				</li>
			</ul>
		</div>
	);
}

export default NavBody;
