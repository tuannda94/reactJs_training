import React from 'react';
import Item from './item';
import './app.scss';

export default class AppComponent extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            todos: [
            	{id:1, name: 'todo_1', completed: true},
            	{id:2, name: 'todo_2', completed: false},
            	{id:3, name: 'todo_3', completed: false},
            	{id:4, name: 'todo_4', completed: true},
            	{id:5, name: 'todo_5', completed: true}
            ]
        };
    }

    render() {
        return (
            <div className="todos">
                <ul className="todo__list">
	                {todos.map(todo =>
	        			<Item key={todo.id} value={todo.name} />
	    			)}
                </ul>
                <div className="create-todo">
                    <div className="new-button"><span>+</span>
                        New thing to do
                    </div>
                </div>
            </div>
        );
    }

}
