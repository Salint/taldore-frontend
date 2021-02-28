import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { Redirect } from "react-router-dom";
import Footer from "../components/Footer";

import "../assets/style/pages/form.css"

class Form extends React.Component {

	constructor(props) {
		super(props);


		this.state = {
			error: "",
			loading: false,
			success: false,
			inputs: {
				username: "",
				email: "",
				password: "",
				passwordConfirm: ""
			}
		}

		this.handleInputChange = this.handleInputChange.bind(this);
		this.createAccount = this.createAccount.bind(this);
	}

	handleInputChange({ target }) {

		this.setState(prev => ({
			inputs: {
				...prev.inputs,
				[target.name]: target.value
			}
		}));

	}

	createAccount() {

		this.setState({
			loading: true
		});
		if(this.state.inputs.email.length < 1 ||
			this.state.inputs.username.length < 1 ||
			this.state.inputs.password.length < 1 || 
			this.state.inputs.passwordConfirm.length < 1) {
			this.setState({
				error: "Please fill out all the forms"
			});
			this.setState({
				loading: false
			});
		}
		else if(this.state.inputs.password !== this.state.inputs.passwordConfirm) {
			this.setState({
				error: "Both passwords do not match"
			});
			this.setState({
				loading: false
			});
		}
		else {

			firebase.auth().createUserWithEmailAndPassword(

				this.state.inputs.email, 
				this.state.inputs.username
				
			).then(userCredentials => {

				firebase.firestore().collection("users").doc(userCredentials.user.uid).set({
					username: this.state.inputs.username
				});

				this.setState({
					success: true
				});

			}).catch(error => {
				this.setState({
					error: error.message
				});
			});
		}

	}

	render() {
		return (
			<section class="auth-form">
				<h1>Sign up</h1>
				{ this.state.error.length > 0 && <h2 class="error">{this.state.error}</h2> }
				<div>
					<input type="text" placeholder="Username" name="username" onChange={this.handleInputChange} disabled={this.state.loading} />
					<input type="email" placeholder="E-mail" name="email" onChange={this.handleInputChange} disabled={this.state.loading} />
					<input type="password" placeholder="Password" name="password" onChange={this.handleInputChange} disabled={this.state.loading} />
					<input type="password" placeholder="Confirm Password" name="passwordConfirm" onChange={this.handleInputChange} disabled={this.state.loading} />
				
					<button onClick={this.createAccount} disabled={this.state.loading}>Create an Account</button>
				</div>
				<p>Already have an account? <a href="/login">Log In</a></p>
				{ this.state.success && <Redirect path="/app/" /> }
			</section>
		)
	}

}

class Signup extends React.Component {

	render() {
		return (
			<>
				<Form />
				<Footer />
			</>
		)
	}

};

export default Signup;