import React from "react";
import { Redirect } from "react-router-dom";
import { AuthProvider, IfFirebaseAuthed, IfFirebaseUnAuthed } from "../contexts/FirebaseAuthContext";
import ProjectService from "../services/ProjectService";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import "../assets/style/pages/create_project.css"

class Prompt extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			error: "",
			loading: false,
			success: false,
			id: "0",
			inputs: {
				name: "",
				description: ""
			}
		}

		this.handleInputChange = this.handleInputChange.bind(this);
		this.createProject = this.createProject.bind(this);
	}

	handleInputChange({ target }) {

		this.setState(prev => ({
			inputs: {
				...prev.inputs,
				[target.name]: target.value
			}
		}));


	}

	createProject() {

		this.setState({
			loading: true
		});

		(async () => {

			try {

				const ID = await ProjectService.createProject(this.state.inputs.name, this.state.inputs.description);

				this.setState({
					loading: false,
					success: true,
					id: ID
				});

			}
			catch(error) {
				this.setState({
					loading: false,
					error: error.message
				});
			}

		})();

	}

	render() {

		return (
			<section id="create-project">
				{ this.state.success && <Redirect to="/projects" /> }
				<AuthProvider>
					<IfFirebaseUnAuthed>
						<Redirect to="/"/>
					</IfFirebaseUnAuthed>
					<IfFirebaseAuthed>
						<h1>Create a project</h1>
						{ this.state.error.length > 0 && <h2 className="error">{this.state.error}</h2> }
						<section id="form">
							<div>
								<label>Project Name:</label>
								<br />
								<input
									type="text"
									name="name"
									placeholder="super-awesome-game"
									disabled={this.state.loading}
									onChange={this.handleInputChange}
								/>
							</div>
							<div>
								<label>Description:</label>
								<br />
								<textarea
									name="description"
									placeholder="super-awesome-game is a game that is super awesome but also a game."
									rows={5}
									disabled={this.state.loading}
									onChange={this.handleInputChange}
								/>
							</div>
						</section>
						<button
							disabled={this.state.loading}
							onClick={this.createProject}
						>Create Project</button>
					</IfFirebaseAuthed>
				</AuthProvider>
			</section>
		)

	}

}

class CreateProject extends React.Component {

	render() {

		return (
			<>
				<Navbar />
				<Prompt />
				<Footer />
			</>
		)

	}

}

export default CreateProject;