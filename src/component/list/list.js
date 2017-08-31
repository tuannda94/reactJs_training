import React from 'react';
import Item from './item/item';

const List = ({todos, todoRemove, clickCheckbox}) => (
    <ul>
        {todos.map(todo =>
            <Item key={todo.id} todo={todo} itemRemove={() => todoRemove(todo.id)} onClick={() => clickCheckbox(todo.id)} />
        )}
    </ul>
)

export default List;