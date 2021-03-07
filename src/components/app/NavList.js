import { faBook, faCog, faHome, faMap, faNotesMedical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "../../assets/style/app/components/navlist.css";

class NavList extends React.Component {

	render() {
	
		return (
			<section id="app-navlist">
				<div id="app-account">
					<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bestructural.com%2Fwp-content%2Fuploads%2F2015%2F03%2Fgeneric-image-placeholder.png&f=1&nofb=1" alt="Profile"></img>
					<div>
						<h3>Salint</h3>
						<p>salintofficial@hotmail.com</p>
					</div>
				</div>
				<ul id="app-navigation">
					<li><a href="/app/"><FontAwesomeIcon icon={faMap} /> <p>Projects</p></a></li>
					<li><a href="/app/"><FontAwesomeIcon icon={faBook} /> <p>Sticky Notes</p></a></li>
					<li><a href="/app/"><FontAwesomeIcon icon={faCog} /> <p>Settings</p></a></li>
					<li><a href="/app/"><FontAwesomeIcon icon={faHome} /> <p>Placeholder</p></a></li>
				</ul>
			</section>
		)

	}

}

export default NavList;