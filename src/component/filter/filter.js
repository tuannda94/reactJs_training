import React from 'react';
import './filter.scss';

const Filter = ({clickFilter, filter}) => (
    <div className="todo__filter">
        <button className={filter === "SHOW_ALL" ? "btn btn-warning" : "btn btn-default"} onClick={() => clickFilter('SHOW_ALL')}>ALL</button>
        <button className={filter === "SHOW_COMPLETED" ? "btn btn-warning" : "btn btn-default"} onClick={() => clickFilter('SHOW_COMPLETED')}>COMPLETED</button>
        <button className={filter === "SHOW_ACTIVE" ? "btn btn-warning" : "btn btn-default"} onClick={() => clickFilter('SHOW_ACTIVE')}>ACTIVE</button>
    </div>
)

export default Filter;
