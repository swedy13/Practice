Box = React.createClass({

	getInitialState() {
		return {
			dragItem: false
		};
	},

	mouseDown() {
		return this.setState({
			dragItem: true
		});
	},

	mouseUp() {
		return this.setState({
			dragItem: false
		});
	},

	mouseLeave() {
		return this.setState({
			dragItem: false
		});
	},

	render() {
		return (
			<div className="container select-disabled" onMouseDown={this.mouseDown} onMouseUp={this.mouseUp} onMouseLeave={this.mouseLeave}>
				<div className={"paper rounded select-disabled " + (this.state.dragItem ? 'drag-enabled' : '')}>
					<span className="paper-interior select-enabled">
						{this.props}												
					</span>
				</div>				
			</div>
		);
	},
});
