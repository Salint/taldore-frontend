import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../assets/style/components/navbar.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars, faCog } from "@fortawesome/free-solid-svg-icons";

class Navbar extends React.Component {

	openNavigation() {
		document.querySelector("ul").classList.toggle("opened");
		document.body.classList.toggle("unscrollable");
	}

	render() {
		return (
			<nav>
				<div id="brand">
					<a href="/">Taldore</a>
				</div>
				<ul>
					<li><a href="/privacy">Privacy Policy</a></li>
					<li><a href="/faq">FAQ</a></li>
					<li><a href="/blog">Blog</a></li>
				</ul>
				<div id="auth">
					{ 
						localStorage.getItem("access_token") ? 
						<a href="/app/"><FontAwesomeIcon icon={faCog} /> Open Application</a> : 
						<a href="https://github.com/login/oauth/authorize"><FontAwesomeIcon icon={faGithub} /> Login with GitHub</a> 
					}
					<button onClick={this.openNavigation}><FontAwesomeIcon icon={faBars} /></button>
				</div>
			</nav>
		)
	}

};

export default Navbar;