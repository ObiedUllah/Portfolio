import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Banner from "./components/Banner";
import Contact from "./components/Contact";
import GlobalStyles from "./assets/GlobalStyles";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
	return (
		<div className="App">
			<GlobalStyles />
			<NavBar />
			<Banner />
			<Skills />
			<Projects />
			<Contact />
		</div>
	);
}

export default App;
