import React, { useState, useEffect } from 'react';
import Todo from './Todo/Todo';
import axios from 'axios';
import './App.css';

function App() {
    const [todos, setTodos] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/todos').then(resp => {
        setTodos(resp.data);
    });
    })
    return (
        <div>
            <h1>Todo App</h1>
            <div className="App-container">
                {todos.map(todo => {
                    return <Todo key={todo.id} todo={todo} />
                })}
            </div>
        </div>
    );
}

export default App;