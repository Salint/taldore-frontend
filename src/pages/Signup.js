import React from "react";
import { Redirect } from "react-router-dom";
import Footer from "../components/Footer";
import AuthService from "../services/AuthService";

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

		(async () => {
			try {
				await AuthService.signUp(this.state.inputs.username, this.state.inputs.email, this.state.inputs.password, this.state.inputs.passwordConfirm);
				this.setState({
					loading: false,
					success: true
				});
			}
			catch(error) {
				this.setState({
					error: error.message,
					loading: false
				});
			}
		})();

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
				{ this.state.success && <Redirect to="/projects/" /> }
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