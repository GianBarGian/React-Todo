import React from 'react';

export default class TodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: "",
            searchValue: "",
        }
    }

    changeInput = event => {
        this.setState({
            inputValue: event.target.value,
          });
    }

    changeSearch = event => {
        this.setState({
            searchValue: event.target.value,
          });
    }

    clicked = () => {
        const newItem = {
            task: this.state.inputValue,
            id: new Date(),
            completed: false,
        }

        this.props.addTodoItem(newItem);
        this.clearForm();
    }

    clearForm = () => {
        this.setState({
            inputValue: ""
        })
    }

    render() {
        return (
            <div className="todo-form">
                <input type="text" value={this.state.searchValue} onChange={this.changeSearch}/>
                <button onClick={() => this.props.searchItem(this.state.searchValue)}>Search</button>
                <input type="text" value={this.state.inputValue} onChange={this.changeInput}/>
                <button onClick={this.clicked}>Add Todo</button>
                <button onClick={this.props.clearCompleted}>Clear Completed</button>
            </div>
        )
    }
}




