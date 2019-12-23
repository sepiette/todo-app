import React, { useState, useEffect } from 'react';
import Todo from './Todo/Todo';
import axios from 'axios';
import {cloneDeep} from 'lodash';
import { getTodos, createTodo, deleteTodo, updateTodo } from './ApiServices/TodoService';
import './App.css';

function App() {
    const DEFAULT_TODO = {
        title: '',
        description: ''
    };
    const [todos, setTodos] = useState([]);
    const [showAddToDo, setShowAddToDo] = useState(false);
    let newTodo = { ...DEFAULT_TODO };

    useEffect(() => {
        fetchToDos();
    }, [])

    let fetchToDos = () => {
        getTodos().then(data => {
            setTodos(data);
        });
    }

    let removeTodo = (id) => {
        deleteTodo(id).then(() => fetchToDos());
    }

    let addToDo = () => {
        createTodo(newTodo).then(() => fetchToDos());
        setShowAddToDo(false);
        newTodo = { ...DEFAULT_TODO };
    };

    let updateCompletedTodo = (id) => {
        const foundTodo = todos.find(todo => todo.id === id) || null;
        if (foundTodo !== null) {
            const currentTodo = cloneDeep(foundTodo);
            console.log(currentTodo)
            currentTodo.completed = true;
            updateTodo(currentTodo).then(() => fetchToDos());
        }

    }

    let showAddToDoForm = () => {
        if (showAddToDo) {
            return (
                <div className="App-add-todo">
                    <input type="text" placeholder="Title" onChange={(e) => { newTodo.title = e.target.value }}></input>
                    <textarea placeholder="Description" onChange={(e) => { newTodo.description = e.target.value }} />
                    <button className="App-btn" onClick={() => addToDo()}>Add Todo</button>
                </div>
            );
        }
        return '';
    };

    return (
        <div>
            <h1>Todo App</h1>
            <button className="App-btn" onClick={() => setShowAddToDo(true)}>Add Todo</button>
            <div className="App-container">
                {todos.map(todo => {
                    return <Todo key={todo.id}
                        todo={todo}
                        removeTodo={removeTodo}
                        updateCompleted={updateCompletedTodo} />
                })}
            </div>
            {showAddToDoForm()}
        </div>
    );
}

export default App;