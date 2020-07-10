import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import './App.css';

import NavBar from "./component/navbar/NavBar";
import Search from "./component/search/Search";

class App extends React.Component {
	render() {
		return (
			<MuiThemeProvider>
				<div>
					<NavBar />
					<Search />
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;
