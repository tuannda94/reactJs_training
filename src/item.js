import React from 'react';
import './item.scss';

export default class Item extends React.Component {

    constructor(props) {
        super(props);
    }

	render () {
		return (
			<li className="todo__item">
				<label className="item_name">
                    {this.props.todo.name}
                </label>
				<span className="button-remove" onClick={this.itemRemove}>-</span>
			</li>
		);
	}
}
