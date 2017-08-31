import React from 'react';
import './filter.scss';

const Filter = ({clickFilter}) => (
    <div className="todo__filter">
        <button  className="todo__filter-item" onClick={() => clickFilter('SHOW_ALL')}>ALL</button>
        <button  className="todo__filter-item" onClick={() => clickFilter('SHOW_COMPLETED')}>COMPLETED</button>
        <button  className="todo__filter-item" onClick={() => clickFilter('SHOW_ACTIVE')}>ACTIVE</button>
    </div>
)

export default Filter;
