import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../assets/style/pages/home.css";

class Header extends React.Component {

	render() {
		return (
			<header id="home">
				<Navbar />
				<section>
					<h1>An easy-to-use project management system.</h1>
					<p>That will knock your socks off.</p>
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