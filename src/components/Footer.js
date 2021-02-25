import React from "react";

import "../assets/style/components/footer.css";

class Footer extends React.Component {

	render() {
		return (
			<footer>
				<h6>Taldore</h6>
				<ul>
					<li><a href="/contact">Contact Us</a></li>
					<li><a href="/faq">FAQ</a></li>
					<li><a href="/blog">Blog</a></li>
					<li><a href="https://github.com/Salint">GitHub</a></li>
				</ul>
				<p>(c) Salint 2021. All Rights Reserved.</p>
			</footer>
		)
	}

};

export default Footer;