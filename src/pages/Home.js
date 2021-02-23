import React from "react";

import Navbar from "../components/Navbar";

import "../assets/style/pages/home.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

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

class Privacy extends React.Component {

	render() {
		return (
			<section id="home-privacy">
				<div id="privacy-info">
					<h1>Scared about your privacy?</h1>
					<p>No sensitive information is needed, it's all done through GitHub! Read our <a href="/privacy">Privacy Policy</a>.</p>
				</div>
				<div id="connection">
					<FontAwesomeIcon icon={faGlobe} />
					<p>------</p>
					<FontAwesomeIcon icon={faGithub} />
				</div>
			</section>
		);
	}

};

class Home extends React.Component {

	render() {
		return (
			<>
				<Header />
				<Privacy />
			</>
		)
	}

};

export default Home;