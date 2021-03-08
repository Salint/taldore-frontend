import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";

import "./assets/style/master.css";

class Router extends React.Component {

	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/signup" component={Signup} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/projects" component={Dashboard} />
				</Switch>
			</BrowserRouter>
		)
	}

};

export default Router;