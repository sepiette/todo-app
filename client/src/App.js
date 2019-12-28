import React, { useState, useEffect } from 'react';
import Todo from './Todo/Todo';
import axios from 'axios';
import {cloneDeep} from 'lodash';
import { getTodos, createTodo, deleteTodo, updateTodo } from './ApiServices/TodoService';
import './App.css';
import CreateTodoForm from './CreateTodoForm/CreateTodoForm';

function App() {
    
    const [todos, setTodos] = useState([]);
    const [showAddToDo, setShowAddToDo] = useState(false);

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
                <CreateTodoForm  showModal={setShowAddToDo} onCreate={fetchToDos} />
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