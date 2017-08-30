import React from 'react';

export default class Item extends React.Component {
	render () {
		return (
			<li className="item">
				<label className="item_name"> </label>
				<span className="button_remove">-</span>
			</li>
		);
	}
}