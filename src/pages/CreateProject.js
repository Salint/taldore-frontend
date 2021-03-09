import React from "react";
import { Redirect } from "react-router-dom";
import { AuthProvider, IfFirebaseAuthed, IfFirebaseUnAuthed } from "../contexts/FirebaseAuthContext";

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
			inputs: {
				name: "",
				description: ""
			}
		}

		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange({ target }) {

		this.setState(prev => ({
			inputs: {
				...prev.inputs,
				[target.name]: target.value
			}
		}));


	}


	render() {

		return (
			<section id="create-project">

				<AuthProvider>
					<IfFirebaseUnAuthed>
						<Redirect path="/"/>
					</IfFirebaseUnAuthed>
					<IfFirebaseAuthed>
						<h1>Create a project</h1>
						<section id="form">
							<div>
								<label>Project Name:</label>
								<br />
								<input
									type="text"
									name="name"
									placeholder="super-awesome-game"
									disabled={this.state.pending}
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
									disabled={this.state.pending}
									onChange={this.handleInputChange}
								/>
							</div>
						</section>
						<button
							disabled={this.state.pending}
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