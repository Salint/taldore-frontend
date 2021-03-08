import firebase from "./FirebaseService";

class AuthService {

	static async signUp(username, email, password, passwordConfirm) {

		if(username.length < 1 ||
			email.length < 1 ||
			password.length < 1 ||
			passwordConfirm.length < 1) {

			throw new Error("Some fields are empty");
		}
		else if(password !== passwordConfirm) {
			throw new Error("Passwords don't match");
		}
		else {

			try {
				const userCredentials = await firebase.auth().createUserWithEmailAndPassword(email, password);

				await firebase.firestore().collection("users").doc(userCredentials.user.uid).set({
					username: username
				});

			}
			catch(error) {
				throw error;
			}
		}

	}

}

export default AuthService;