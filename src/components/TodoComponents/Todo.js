import React from 'react';

export default function Todo(props) {

    return (
        <div className={props.todoItem.completed ? "completed" : ""} onClick={() => props.updateTodoList(props.todoItem.id)} key={props.todoItem.id}>{props.todoItem.task}</div>
    )
}