import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";

import "./assets/style/master.css";

class Router extends React.Component {

	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/privacy" component={PrivacyPolicy} />
				</Switch>
			</BrowserRouter>
		)
	}

};

export default Router;