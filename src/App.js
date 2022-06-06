import { UserProvider } from "./context/UserContext";
import { ThemeProvider } from "./context/ThemeContext";

import Main from "./pages/Main";

function App() {
	return (
		<ThemeProvider>
			<UserProvider>
				<Main />
			</UserProvider>
		</ThemeProvider>
	);
}

export default App;
