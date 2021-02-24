import React from "react";

import Navbar from "../components/Navbar";

import "../assets/style/pages/home.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import Picture from "../assets/images/salint.jpg";

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

class Tasks extends React.Component {
	render() {
		return (
			<section id="home-tasks">
				<div id="tasks-info">
					<h1>Keep track of each task.</h1>
					<p>Let it calculate how much is left!</p>
				</div>
				<div id="task">
					<h1>Add mobile support</h1>
					<p>66.6%. 2 out of 3 tasks completed.</p>
					<div id="outer">
						<div id="inner"></div>
					</div>
				</div>
			</section>
		);
	}
}

class Credits extends React.Component {
	render() {
		return (
			<section id="home-credits">
				<img src={Picture} alt="Salint"/>
				<div>
					<h1>Mohamed "Salint" Abduljawad</h1>
					<p>Hi! I'm a 16-year old Egyptian programmer.<br />Glad to know someone took a look at this.</p>
				</div>
			</section>
		);

	}
}

class Home extends React.Component {

	render() {
		return (
			<>
				<Header />
				<Privacy />
				<Tasks />
				<Credits />
			</>
		)
	}

};

export default Home;