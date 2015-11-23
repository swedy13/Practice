import { Component, PropTypes } from 'react';
import { LInk } from 'react-router';


export default class AdminApp extends Component {

	static propTypes = {
		children: PropTypes.any.isRequired
	}

	render() {
		return (
			<div>
				<Link to="/">Back</Link>
				<h1>Admin</h1>
				{this.props.children}
			</div>
		)
	}
}
