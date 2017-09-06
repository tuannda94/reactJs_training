import React from 'react';
import List from './list/list';
import Create from './create/create';
import Filter from './filter/filter';
import _map from 'lodash/map';
import ReactDOM from 'react-dom';
import {getTodos, createTodo, updateTodo, deleteTodo} from '../api/axios';
import _findIndex from 'lodash/findIndex';
import './app_component.scss';

export default class AppComponent extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            todos: [], 
            filter:'SHOW_ALL'
        };

        this.handleTodoRemove = this.handleTodoRemove.bind(this);
        this.filterTodo = this.filterTodo.bind(this);
        this.handleTodoFilter = this.handleTodoFilter.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);

    }

    componentWillMount() {
        getTodos((respones) => {
            this.setState({ todos: respones.data }) });
    }

    // su kien click button - item
    handleTodoRemove(id) {
        const todos = this.state.todos;
        deleteTodo(id, (respones) => {
            let filter = todos.filter(t => t.id !== id);
            this.setState({todos: filter});
        });
        
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
        const todos = this.state.todos;
        let index = _findIndex(todos, {id});
        if (index !== -1) {
            let todo = todos[index];
            todo.completed = !todo.completed;
            todos[index] = todo;
            this.setState({todos});
        }
    }

    handleAddTodo(text) {
        const todos = this.state.todos;
        createTodo({name: text, completed: false}, (respones) => {
            todos.push(respones.data);
            this.setState({todos});
        });
    }

    render() {
        return (
            <div className="todos">
                <List todos={this.filterTodo()} todoRemove={this.handleTodoRemove} clickCheckbox={this.handleCheckbox}/>
                <Filter clickFilter={this.handleTodoFilter} filter={this.state.filter} />
                <Create inputSave={this.handleAddTodo} />

            </div>
        );
    }

}
