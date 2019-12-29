import React from 'react';
import './CreateTodoForm.scss';
import { createTodo, getTodos } from '../ApiServices/TodoService';

function CreateTodoForm(props) {
    const DEFAULT_TODO = {
        title: '',
        description: ''
    };
    let newTodo = { ...DEFAULT_TODO };

    let addTodo = () => {
        createTodo(newTodo).then(() => getTodos().then(data => props.onCreate(data)));
        newTodo = { ...DEFAULT_TODO };
        props.onClose();
    };

    return (
        <div className="CreateTodo-container">
            <h3>Create Todo</h3>
            <input className="CreateTodo-title"
                type="text"
                placeholder="Title"
                onChange={(e) => { newTodo.title = e.target.value }}></input>
            <textarea className="CreateTodo-description"
                placeholder="Description"
                onChange={(e) => { newTodo.description = e.target.value }} />

            <button className="primary-btn" onClick={() => addTodo()}>Add Todo</button>
        </div>

    )
}

export default CreateTodoForm;