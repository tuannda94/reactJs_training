import React from 'react';
import Item from './item';

export default class List extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {
        let todos = this.props.todos;
        return (
            <ul>
                {todos.map(todo =>
                    <Item key={todo.id} todo={todo} itemRemove={todoRemove(todo.id)}/>
                )}
            </ul>
        );
    }
}
