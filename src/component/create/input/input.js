import React from 'react';
import './input.scss';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value || ''
        };

        this.updateInputValue = this.updateInputValue.bind(this);
    }
    
    updateInputValue (event) {
        this.setState({
            value: event.target.value
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            this.setState({value: nextProps.value});
        }
    }

    getValue() {
        return this.state.value ? this.state.value.trim() : null;
    }

    render() {
        return (
            <div className='input-field-container'>
                <input
                    type={this.props.type || 'text'}
                    value={this.state.value || ''}
                    name={this.props.name}
                    onChange={this.updateInputValue}
                    placeholder={this.props.placeholder || ''}
                    ref={this.props.inputRef}
                    disabled={this.props.disabled ? true : false}
                    maxLength={this.props.maxLength || -1}
                />
            </div>
        );
    }
}

export default Input;
