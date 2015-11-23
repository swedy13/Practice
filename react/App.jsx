App = React.createClass({

	mixins: [ReactMeteorData],

	getInitialState() {
		return {
			hideCompleted: false
		}
	},

	getMeteorData() {
		let query = {};

		if (this.state.hideCompleted) {
			query = {checked: {$ne: true}};
		}
		
		return {
			tasks: Tasks.find(query, {sort: {createdAt: -1}}).fetch(),
			incompleteCount: Tasks.find({checked: {$ne: true}}).count(),
			currentUser: Meteor.user()
		};
	},

	renderTasks() {
		return this.data.tasks.map((task) => {
			return <Task key={task._id} task={task}/>;
		});
	},

	handleSubmit(eevnt) {
		event.preventDefault();

		var text = React.findDOMNode(this.refs.textInput).value.trim();

		Tasks.insert({
			text: text,
			createdAt: new Date(),
			owner: Meteor.userID(),
			username: Meteor.user().username
		});

		ReactDOM.findDOMNode(this.refs.textInput).value = "";
	},

	toggleHideCompleted() {
		this.setState({
			hideCompleted: ! this.state.hideCompleted
		});
	},

	render() {
		return (
			<div className="container">
				<header>
					<h1>Tasks ({this.data.incompleteCount})</h1>

					<label className="hide-completed">
						<input
							type="checkbox"
							readOnly={true}
							checked={this.state.hideCompleted}
							onClick={this.toggleHideCompleted} />
						Hide Completed Tasks
					</label>

					<AccountsUIWrapper/>

					{this.data.currentUser ?
					<form className="new-task" onSubmit={this.handleSubmit}>
						<input
							type="text"
							ref="textInput"
							placeholder="Type to add a new task..."/>
					</form> : ''}
				</header>

				<ul>
					{this.renderTasks()}
				</ul>
			</div>
		);
	}
});