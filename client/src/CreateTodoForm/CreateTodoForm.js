import React from 'react';
import './CreateTodoForm.css';
import {createTodo} from '../ApiServices/TodoService';

function CreateTodoForm(props) {
    const DEFAULT_TODO = {
        title: '',
        description: ''
    };
    let newTodo = { ...DEFAULT_TODO };

    let addTodo = () => {
        createTodo(newTodo).then(() => props.onCreate());
        newTodo = { ...DEFAULT_TODO };
        props.showModal(false)
    };

    return (
        <div className="overlay" onClick={(e) => {return e.target.className.includes('overlay') ?  props.showModal(false) : null}}>
            <div className="CreateTodoForm">
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
        </div>

    )
}

export default CreateTodoForm;