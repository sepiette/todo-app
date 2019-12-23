import React from 'react';
import './Todo.css';
import {deleteTodo} from '../ApiServices/TodoService';

function Todo(props) {
    return (
        <div className="Todo-container">
            <div className="Todo-title">{props.todo.title}</div>
            <div className="Todo-delete" onClick={() => props.removeTodo(props.todo.id)}>X</div>
            <div className="Todo-description">{props.todo.description}</div>
            Complete? <input type="checkbox" className="Todo-completed" />
        </div>
    )
}

export default Todo