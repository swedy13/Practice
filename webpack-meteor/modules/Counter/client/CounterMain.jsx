import { Component } from 'react';
import { Link } from 'react-router';


export default class CounterMain extends Component {

	constructor() {
		super();
		this.state = { counter: 0 };
	}
	
  addToCounter() {
		this.setState({counter: this.state.counter + 1});
  }
	
  render() {
    return (
      <div>
        <h1>Welcome to Meteor!</h1>
				<span>
        <button
          onClick={this.addToCounter.bind(this)}
          >Click Me</button>
        <p>You've pressed the button {this.state.counter} times.</p>
				<Link to="/admin">Admin</Link>					
				</span>
      </div>
    );
  }
}
