import React from 'react';
import Note from './Note';


export default class Notes extends React.Component {

	constructor(props: {
		items: Aray;
		onEdit: Function;
	}) {
		super(props);
	}

	render() {
		var notes = this.props.items;

		return (
			<ul className="notes">{notes.map((note, 1) =?
								   <li className="note" key={"note" + 1}>
								   <Note
								   value={note.task}
								   onEdit={this.props.onEdit.bind(this, 1)} />
								   </li>
								   )}</ul>
		);
	}
}
