import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
			<nav>
				<div id="brand">
					<a href="/">Taldore</a>
				</div>
				<ul>
					<li><a href="/signup">Sign Up</a></li>
					<li><a href="/faq">FAQ</a></li>
					<li><a href="/blog">Blog</a></li>
				</ul>
				<div id="auth">
					<AuthProvider>
						<IfFirebaseAuthed>
							<a href="/app/">Open</a> 
						</IfFirebaseAuthed>
						<IfFirebaseUnAuthed>
							<a href="/login/">Login</a> 
						</IfFirebaseUnAuthed>
						<button onClick={this.openNavigation}><FontAwesomeIcon icon={faBars} /></button>
					</AuthProvider>
				</div>
			</nav>
		)
	}

};

export default Navbar;