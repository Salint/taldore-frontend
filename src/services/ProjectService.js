import firebase from "./FirebaseService";

class ProjectService {

	static async listProjects() {

		let projects = [];

		try {

			const results = await firebase.firestore().collection("posts").where("members", "array-contains", firebase.auth().currentUser.uid).get();
			const docs = results.docs;

			for(let i = 0; i < docs.length; i++) {
				projects.push({
					id: docs[i].id,
					name: docs[i].get("name"),
					description: docs[i].get("description"),
					memberCount: docs[i].get("members").length
				})
			}

		}
		catch(error) {

			throw error;
		}
		finally {
			return projects;
		}

	}
	static async createProject(name, description) {

		let id;

		if(name.length < 1 || description.length < 1 ) {
			throw new Error("Some fields are empty");
		}
		else {

			try {
				const results = await firebase.firestore().collection("projects").add({
					name: name,
					description: description,
					created: new Date(),
					owner: firebase.auth().currentUser.uid,
					members: [
						firebase.auth().currentUser.uid
					]
				});

				id = results.id;
			}
			catch(error) {

				throw error;
			}

			finally {
				return id;
			}
		}

	}

}

export default ProjectService;