import React from "react";

import Footer from "../components/Footer";

import "../assets/style/pages/form.css"

class Form extends React.Component {

	render() {
		return (
			<section class="auth-form">
				<h1>Sign up</h1>
				<div>
					<input type="text" placeholder="Username" id="username" />
					<input type="email" placeholder="E-mail" id="email" />
					<input type="password" placeholder="Password" id="password" />
					<input type="password" placeholder="Confirm Password" id="password_confirm" />
				
					<button>Create an Account</button>
				</div>
				<p>Already have an account? <a href="/login">Log In</a></p>
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