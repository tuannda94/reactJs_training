import React from 'react';
import './create.scss';

export default class Create extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            taskCreating: false,
            value: this.value || ''
        };
        this.inputCancel = this.inputCancel.bind(this);
    }

    inputSave () {

    }

    inputCancel () {
        this.setState({
            value: '',
            taskCreating: false
        });
    }

    render () {
        if(this.state.taskCreating) {
            return (
                <div className='input-field-container'>
                    <input 
                        type="text"
                        placeholder="Here"
                        value={this.state.value || ''}
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