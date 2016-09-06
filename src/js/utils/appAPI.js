var Firebase = require('./FbApp.js');
var AppActions = require('../actions/AppActions');

module.exports = {
	saveContact: function(contact){
		var firebaseRef = Firebase.ref('/contacts');
		firebaseRef.push({
			contact: contact
		});
	},
	getContacts: function(){
		var firebaseRef = Firebase.ref('/contacts');
		firebaseRef.once("value", function(snapshot){
			var contacts = [];
			snapshot.forEach(function(childSnapshot){
				var contact = {
					id: childSnapshot.key,
					name: childSnapshot.val().contact.name,
					phone: childSnapshot.val().contact.phone,
					email: childSnapshot.val().contact.email
				}
				contacts.push(contact);
				AppActions.receiveContacts(contacts);
			});
		});
	}
}
