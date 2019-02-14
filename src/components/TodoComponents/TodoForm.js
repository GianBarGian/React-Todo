import React from 'react';

export default class TodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: "",
        }
    }

    changeHandler = event => {
        this.setState({
            inputValue: event.target.value,
          });
    }

    clicked = () => {
        const newItem = {
            task: this.state.inputValue,
            id: new Date(),
            completed: false,
        }

        this.props.addTodoItem(newItem);
    }

    render() {
        return (
            <div className="todo-form">
                <input type="text" value={this.state.inputValue} onChange={this.changeHandler}/>
                <button onClick={this.clicked}>Add Todo</button>
                <button onClick={this.props.clearCompleted}>Clear Completed</button>
            </div>
        )
    }
}




