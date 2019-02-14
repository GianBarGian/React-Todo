import React from 'react';

export default function Todo(props) {
    return (
        <div onClick={props.clickedTodo} key={props.todoItem.id}>{props.todoItem.task}</div>
    )
}