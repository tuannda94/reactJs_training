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
                <form>
                    <div className="form-group">
                        <Input
                            name="todo"
                            placeholder="here"
                            ref={(c) => {this.todo = c;}}

                        />
                    </div>
                    <button onClick={this.inputSave} className="btn btn-success btn-sm">Save</button>
                    <button onClick={this.inputCancel} className="btn btn-warning btn-sm">Cancel</button>
                </form>
            )
        }

        return (
            <div className="create-todo">
                <div className="new-button">
                    <button onClick={() => {this.setState({taskCreating: true})}} className="btn btn-primary">Add new task!</button>
                    
                </div>
            </div>
        )
    }
}