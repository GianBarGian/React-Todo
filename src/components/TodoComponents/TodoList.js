// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

export default function TodoList(props) {
    

    return (
        <div className="todo-list">
            {
                props.todoList.map(todoItem => ( 
                    
                    <Todo updateTodoList={props.updateTodoList} todoItem={todoItem}/>
                ))
            }
        </div>
    )
}