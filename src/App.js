import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class test extends React.Component {
	render() {
		return <h1>hello world</h1>;
	}
}

class Router extends React.Component {

	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={test} />
				</Switch>
			</BrowserRouter>
		)
	}

};

export default Router;