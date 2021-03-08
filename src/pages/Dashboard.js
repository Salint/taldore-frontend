import React from "react";
import Navbar from "../components/Navbar";

import "../assets/style/pages/dashboard.css"
import Footer from "../components/Footer";

class Projects extends React.Component {

	render() {

		return (
			<section id="dashboard">
				<h1>Project List</h1>
				<section id="project-list">
					<div className="project">
						<h2>Project 1</h2>
						<h3>Project description placeholder here.</h3>
						<p>1 Member</p>
						<a>View Project</a>
					</div>
					<div className="project">
						<h2>Project 2</h2>
						<h3>Project description placeholder here.</h3>
						<p>3 Members</p>
						<a>View Project</a>
					</div>
					<div className="project">
						<h2>Project 2</h2>
						<h3>Project description placeholder here.</h3>
						<p>2 Members</p>
						<a>View Project</a>
					</div>
					<div className="project">
						<h2>Project 2</h2>
						<h3>Project description placeholder here.</h3>
						<p>2 Members</p>
						<a>View Project</a>
					</div>
				</section>
			</section>
		)

	}

}

class Dashboard extends React.Component {

	render() {
	
		return (
			<>
				<Navbar />
				<Projects />
				<Footer />
			</>
		)

	}

}

export default Dashboard;