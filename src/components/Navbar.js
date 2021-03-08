import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AuthService from "../services/AuthService";

import "../assets/style/components/navbar.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { AuthProvider, IfFirebaseAuthed, IfFirebaseUnAuthed } from "../contexts/FirebaseAuthContext";

class Navbar extends React.Component {

	openNavigation() {
		document.querySelector("ul").classList.toggle("opened");
		document.body.classList.toggle("unscrollable");
	}

	render() {
		return (
			<AuthProvider>
				<nav>
					<div id="brand">
						<a href="/">Taldore</a>
					</div>
					<ul>
						<li><a href="/contact">Contact Us</a></li>
						<li><a href="/faq">FAQ</a></li>
						<li><a href="/blog">Blog</a></li>
						<IfFirebaseAuthed>
							<li><a href="/" onClick={() => AuthService.logOut()}>Log Out</a></li>
						</IfFirebaseAuthed>
					</ul>
					<div id="auth">
							<IfFirebaseAuthed>
								<a href="/projects">Open</a>
							</IfFirebaseAuthed>
							<IfFirebaseUnAuthed>
								<a href="/login/">Login</a>
							</IfFirebaseUnAuthed>
							<button onClick={this.openNavigation}><FontAwesomeIcon icon={faBars} /></button>
					</div>
				</nav>
			</AuthProvider>
		)
	}

};

export default Navbar;