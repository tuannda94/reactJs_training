import React from 'react';
import List from './list/list';
import Create from './create/create';
import Filter from './filter/filter';
import _map from 'lodash/map';
import ReactDOM from 'react-dom';


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
            ],
            filter:'SHOW_ALL'
        };

        this.handleTodoRemove = this.handleTodoRemove.bind(this);
        this.filterTodo = this.filterTodo.bind(this);
        this.handleTodoFilter = this.handleTodoFilter.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);

    }
    // su kien click button - item
    handleTodoRemove(id) {
        const todos = this.state.todos;
        let filter = todos.filter(t => t.id !== id);
        this.setState({todos: filter});
    }
    // su kien click filter, sau do chay den filterTodo()
    handleTodoFilter(filter) {
        this.setState({filter});
    }
    // loc loai todo
    filterTodo() {
        const {todos, filter} = this.state;

        switch (filter) {
            case 'SHOW_ALL':
                return todos
            case 'SHOW_COMPLETED':
                return todos.filter(t => t.completed)
            case 'SHOW_ACTIVE':
                return todos.filter(t => !t.completed)
        }
    }

    handleCheckbox(id) {
        console.log(id)
    }

    handleAddTodo(text) {
        const todos = this.state.todos;
        let ids = _map(todos, 'id');
        let max = Math.max(...ids);
        todos.push({
            id: max+1,
            name: text,
            completed: false
        });

        this.setState({todos});
    }

    render() {
        return (
            <div className="todos">
                <List todos={this.filterTodo()} todoRemove={this.handleTodoRemove} clickCheckbox={this.handleCheckbox}/>
                <Filter clickFilter={this.handleTodoFilter} />
                <Create inputSave={this.handleAddTodo} />

            </div>
        );
    }

}
ReactDOM.render(<AppComponent />, document.getElementById('home_route'));
