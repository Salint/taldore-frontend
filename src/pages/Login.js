import React from "react";

import Footer from "../components/Footer";

import "../assets/style/pages/form.css"

class Form extends React.Component {

	render() {
		return (
			<section class="auth-form">
				<h1>Log In</h1>
				<div>
					<input type="email" placeholder="E-mail" id="email" />
					<input type="password" placeholder="Password" id="password" />
					<button>Log In</button>
				</div>
				<p>Don't have an account? <a href="/login">Sign up</a></p>
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