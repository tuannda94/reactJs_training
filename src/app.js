import React from 'react';
import './app.scss';


export default class Todo extends React.Component {
    render () {
        return (
            <div className="todos">
                <div className="todo__list">
                    <div className="todo__item">
                        <label className="control control--checkbox">
                            Test todo 1
                            <input type="checkbox" value="on" />
                            <div className="control__indicator"></div>
                        </label>
                        <div className="button-remove"><span>-</span>
                        </div>
                    </div>
                    <div className="todo__item">
                        <label className="control control--checkbox">
                            Test todo 2
                            <input type="checkbox" value="on" />
                            <div className="control__indicator"></div>
                        </label>
                        <div className="button-remove"><span>-</span>
                        </div>
                    </div>
                    <div className="todo__item">
                        <label className="control control--checkbox">
                            Test todo 3
                            <input type="checkbox" value="on" />
                            <div className="control__indicator"></div>
                        </label>
                        <div className="button-remove"><span>-</span>
                        </div>
                    </div>
                </div>
                <div className="create-todo">
                    <div className="new-button"><span>+</span>
                        New thing to do
                    </div>
                </div>
            </div>
        )
    }
}
