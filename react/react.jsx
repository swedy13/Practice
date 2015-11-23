// Collections
Tasks = new Mongo.Collection("tasks");


// Client
if (Meteor.isClient) {

	Accounts.ui.config({
		passwordSignupFields: "USERNAME_ONLY"
	});
	
	Meteor.startup(function () {
		ReactDOM.render(<App/>, document.getElementById("render-target"));
	});
}
