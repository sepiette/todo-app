import React from 'react';
import './Todo.scss';

function Todo(props) {
    let isChecked = (todo) => {
        if (todo.completed) {
            return <i className="Todo-completed icofont-checked text-green" title="Completed?"></i>
        }
        return <div className="Todo-completed">
            <span className="checkbox"
                title="Completed?"
                onClick={() => { props.updateCompleted(props.todo.id) }}></span>
        </div>
    }

    let formatDate = (date) => {
        date = new Date(date);
        const formattedMins = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${formattedMins}`;
    }

    let showCompletedDate = (todo) => {
        return todo.completed && todo.completed_date !== null ? <span className="Todo-complete-date">Completed: {formatDate(todo.completed_date)}</span> : '';
    }

    return (
        <div className="Todo-container">
            <div className="Todo-header">
                {isChecked(props.todo)}
                <div>
                    <div className="Todo-title">{props.todo.title}</div>
                    <div className="Todo-date">Created: {formatDate(props.todo.created_date)}</div>
                </div>
            </div>
            <div className="Todo-description">{props.todo.description}</div>
            <div className="Todo-footer">
                {showCompletedDate(props.todo)}
                <i className="Todo-delete icofont-bin text-red text-red-hover"
                    title="Delete"
                    onClick={() => props.removeTodo(props.todo.id)}></i>
            </div>

        </div>
    )
}

export default Todo;