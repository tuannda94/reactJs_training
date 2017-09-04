import React from 'react';
import './item.scss';

const Item = ({todo, itemRemove, onClick}) => (
    <li className="todo__item">
        <label className="item_name">
            {todo.name}
        </label>
        <input type="checkbox" onClick={onClick} label={name} checked={todo.completed ? "checked" : ""} />
        <button className="btn btn-danger btn-sm" onClick={itemRemove}>X</button>
    </li>
)

export default Item;