import React from "react";

import Navbar from "../components/Navbar";

import "../assets/style/pages/home.css"

class Header extends React.Component {

	render() {
		return (
			<header id="home">
				<Navbar />
			</header>
		);
	}

}

class Home extends React.Component {

	render() {
		return (
			<>
				<Header />
			</>
		)
	}

};

export default Home;