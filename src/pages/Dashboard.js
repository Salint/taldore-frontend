import React from "react";
import { Redirect } from "react-router-dom";
import { AuthProvider, IfFirebaseAuthed, IfFirebaseUnAuthed } from "../contexts/FirebaseAuthContext";
import ProjectService from "../services/ProjectService";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import "../assets/style/pages/dashboard.css"

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

				<AuthProvider>
					<IfFirebaseUnAuthed>
						<Redirect path="/"/>
					</IfFirebaseUnAuthed>
					<IfFirebaseAuthed>
						<h1>Project List</h1>
						<a href="/projects/create" id="create">Create a Project</a>
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
					</IfFirebaseAuthed>
				</AuthProvider>
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