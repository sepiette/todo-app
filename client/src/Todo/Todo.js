import React from 'react';
import './Todo.css';

function Todo(props) {
    let isChecked = (todo) => {
        if (todo.completed) {
            return <i className="Todo-completed icofont-checked text-green" title="Completed?"></i>
        }
        return <div className="Todo-completed">
            <span className="checkbox" 
            title="Completed?" 
            onClick={() => {props.updateCompleted(props.todo.id)}}></span>
        </div>
    }
    return (
        <div className="Todo-container">
            <div className="Todo-header">
                {isChecked(props.todo)}
                <div className="Todo-title">{props.todo.title}</div>
            </div>
            <div className="Todo-description">{props.todo.description}</div>
            <i className="Todo-delete icofont-bin text-red text-red-hover" 
                title="Delete" 
                onClick={() => props.removeTodo(props.todo.id)}></i>
        </div>
    )
}

export default Todo;