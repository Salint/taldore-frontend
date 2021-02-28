import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
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
				email: "",
				password: "",
			}
		}

		this.handleInputChange = this.handleInputChange.bind(this);
		this.loginAccount = this.loginAccount.bind(this);
	}

	handleInputChange({ target }) {

		this.setState(prev => ({
			inputs: {
				...prev.inputs,
				[target.name]: target.value
			}
		}));
		

	}

	loginAccount() {

		if(this.state.inputs.email.length < 1 ||
			this.state.inputs.password.length < 1) {
			this.setState({
				error: "Please fill out all the forms",
				loading: false
			});
		}
		else {

			firebase.auth().signInWithEmailAndPassword(this.state.inputs.email, this.state.inputs.password).then(() => {

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
				<h1>Log In</h1>
				{ this.state.error.length > 0 && <h2 class="error">{this.state.error}</h2> }
				<div>
					<input type="email" placeholder="E-mail" name="email" onChange={this.handleInputChange} disabled={this.state.loading} />
					<input type="password" placeholder="Password" name="password" onChange={this.handleInputChange} disabled={this.state.loading} />
					<button onClick={this.loginAccount} disabled={this.state.loading} >Log In</button>
				</div>
				<p>Don't have an account? <a href="/signup">Sign up</a></p>
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