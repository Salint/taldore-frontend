import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDOgjv7omgtRHdgWPJjnZ7A_IhTIup_V20",
	authDomain: "taldore-fb004.firebaseapp.com",
	projectId: "taldore-fb004",
	storageBucket: "taldore-fb004.appspot.com",
	messagingSenderId: "514717962328",
	appId: "1:514717962328:web:723962fc19f015475eba2d"
};

firebase.initializeApp(firebaseConfig);

export default firebase;