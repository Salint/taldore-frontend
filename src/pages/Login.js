import React from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../services/AuthService";

import Footer from "../components/Footer";

import "../assets/style/pages/form.css";

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

		this.setState({
			loading: true
		});

		(async () => {

			try {

				await AuthService.logIn(this.state.inputs.email, this.state.inputs.password);

				this.setState({
					success: true,
					loading: false,
					error: ""
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
			<section className="auth-form">
				<h1>Log In</h1>
				{ this.state.error.length > 0 && <h2 className="error">{this.state.error}</h2> }
				<div>
					<input type="email" placeholder="E-mail" name="email" onChange={this.handleInputChange} disabled={this.state.loading} />
					<input type="password" placeholder="Password" name="password" onChange={this.handleInputChange} disabled={this.state.loading} />
					<button onClick={this.loginAccount} disabled={this.state.loading} >Log In</button>
				</div>
				<p>Don't have an account? <a href="/signup">Sign up</a></p>
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