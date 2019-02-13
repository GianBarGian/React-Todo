// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

export default function TodoList(props) {


    return (
        <div className="todo-list">
            {
                props.todoList.map(todoItem => (
                    <div onClick={() => props.clickedTodo(todoItem.id)} key={todoItem.id}>{todoItem.task}</div>
                ))
            }
        </div>
    )
}