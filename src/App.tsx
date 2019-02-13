import * as React from "react";
import "./App.css";
import Home from "./pages/home/index";

class App extends React.Component {
	public render() {
		return (
			<div className="App">
				<Home />
			</div>
		);
	}
}

export default App;
