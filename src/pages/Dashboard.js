import React from "react";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";

import "../assets/style/pages/dashboard.css"
import Footer from "../components/Footer";
import ProjectService from "../services/ProjectService";

class Projects extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			pending: true,
			error: "",
			projects: []
		}
	}

	componentDidMount() {

		(async () => {

			try {

				const projects = await ProjectService.listProjects();

				this.setState({
					pending: false,
					error: "",
					projects: projects
				});

			}
			catch(error) {
				this.setState({
					pending: false,
					error: error.message
				})
			}

		})();

	}

	render() {

		return (
			<section id="dashboard">
				<h1>Project List</h1>
				{ this.state.pending && <h3 className="loading"><FontAwesomeIcon icon={faSyncAlt} /></h3>}
				{ this.state.error.length > 0 && <h3 className="error">{this.state.error}</h3>}
				{ (this.state.projects.length < 1 && !this.state.pending) && <h3 className="info">You don't have any projects yet.</h3>}
				<section id="project-list">

					{
						this.state.projects.map(project =>
							<div className="project">
								<h2>{project.name}</h2>
								<h3>{project.description}</h3>
								<p>{project.memberCount} Member</p>
								<a href={"/project/" + project.id}>View Project</a>
							</div>)
					}

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