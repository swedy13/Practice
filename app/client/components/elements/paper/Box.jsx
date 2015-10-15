Box = React.createClass({
	
	render() {
		return (
			<div className="container select-disabled">
				<div className="paper z-depth-1 rounded select-enabled" draggable="true">
					<span className="paper-interior">
						{this.props}												
					</span>
				</div>				
			</div>
		)
	}
});
