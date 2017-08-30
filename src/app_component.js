import React from 'react';
import List from './list';
import Create from './create';
import './app_component.scss';

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
        this.handleRemoveTodo = this.handleRemoveTodo.bind(this);

    }

    handleRemoveTodo(id) {
        const todos = this.state.todos;
        let filter = todos.filter(t => t.id !== id);
        this.setState({todos: filter});
    }

    render() {
        return (
            <div className="todos">
                <List todos={this.state.todos} todoRemove={this.handleTodoRemove} />
                <Create />
            </div>
        );
    }

}
