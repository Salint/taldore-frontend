import React from "react";
import { Redirect } from "react-router-dom";
import { AuthProvider, IfFirebaseAuthed, IfFirebaseUnAuthed } from "../contexts/FirebaseAuthContext";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import "../assets/style/pages/create_project.css"

class Prompt extends React.Component {

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
								<input type="text" name="name" placeholder="super-awesome-game" />
							</div>
							<div>
								<label>Description:</label>
								<br />
								<textarea name="description" placeholder="super-awesome-game is a game that is super awesome but also a game." rows={5} />
							</div>
						</section>
						<button>Create Project</button>
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