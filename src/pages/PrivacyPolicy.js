import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../assets/style/pages/privacy_policy.css"

class Header extends React.Component {

	render() {
		return (
			<header id="privacy">
				<Navbar />
				<section>
					<h1>Privacy matters.</h1>
					<p>We don't store any sensitive information.</p>
				</section>
			</header>
		);
	}

}

class Home extends React.Component {

	render() {
		return (
			<>
				<Header />
				<Footer />
			</>
		)
	}

};

export default Home;