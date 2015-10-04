// Client
if (Meteor.isClient) { 
  Meteor.startup(function () {
		router.run(function (Handler, state) {
			React.render(<Handler />, document.getElementById("main"));
		})
  });
}


// Layouts
MainLayout = React.createClass({
	render() {
		return (
			<div id="main">
				{this.props.content}						
			</div>
		)
	}
});
