import firebase from 'firebase'

	var provider = new firebase.auth.FacebookAuthProvider();
	provider.addScope('user_birthday');
	firebase.auth().languageCode = 'pt_BR';

firebase.auth().signInWithPopup(provider).then(function(result) {
	var token = result.credential.accessToken;
	var user = result.user;
	}).catch(function(error) {
	var errorCode = error.code;
	var errorMessage = error.message;
	var email = error.email;
	var credential = error.credential;
	
	});
