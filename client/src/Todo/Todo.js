import React from 'react';
import './Todo.css';

function Todo(props) {
    return (
        <div className="Todo-container">
            <div className="Todo-title">{props.todo.title}</div>
            <div className="Todo-description">{props.todo.description}</div>
            <input type="checkbox" className="Todo-completed" />
        </div>
    )
}

export default Todo