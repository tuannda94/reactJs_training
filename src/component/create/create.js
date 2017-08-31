import React from 'react';
import Input from './input/input';
import './create.scss';

export default class Create extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            taskCreating: false,
            inputValue: ''
        };
        this.inputCancel = this.inputCancel.bind(this);
        this.inputSave = this.inputSave.bind(this);
    }

    inputSave () {
        let text = this.todo.getValue();

        if (this.props.inputSave) {
                this.props.inputSave(text);
                this.inputCancel();
            }
        console.log(text)
    }

    inputCancel () {
        this.todo.setState({value: ''});
        this.setState({taskCreating: false});
    }

    getValue () {
        return this.state.inputValue ? this.state.inputValue.trim() : null;
    }

    render () {
        if(this.state.taskCreating) {
            return (
                <div className='input-field-container'>
                    <Input
                        name="todo"
                        placeholder="here"
                        ref={(c) => {this.todo = c;}}
                    />
                    <div className="button-group">
                        <button onClick={this.inputSave}>+</button>
                        <button onClick={this.inputCancel}>X</button>
                    </div>
                </div>
            )
        }

        return (
            <div className="create-todo">
                <div className="new-button">
                    <span onClick={() => {this.setState({taskCreating: true})}}>+</span>
                    Add new task!
                </div>
            </div>
        )
    }
}