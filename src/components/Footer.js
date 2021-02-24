import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "../assets/style/components/footer.css";

class Footer extends React.Component {

	render() {
		return (
			<footer>
				<h3>Taldore</h3>
				<ul>
					<li><a href="/signup">Sign Up</a></li>
					<li><a href="/faq">FAQ</a></li>
					<li><a href="/blog">Blog</a></li>
					<li><a href="https://github.com/Salint">GitHub</a></li>
				</ul>
				<h3><FontAwesomeIcon icon={faCopyright} /> Salint 2021. All Rights Reserved.</h3>
			</footer>
		)
	}

};

export default Footer;