import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import { cloneDeep } from 'lodash';
import { getTodos, deleteTodo, updateTodo } from '../ApiServices/TodoService';
import './TodoPage.scss';
import CreateTodoForm from '../CreateTodoForm/CreateTodoForm';
import Toolbar from '../Toolbar/Toolbar';

function TodoPage() {

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
            currentTodo.completed_date = new Date();
            updateTodo(currentTodo).then(() => fetchToDos());
        }

    }

    let showAddToDoForm = () => {
        if (showAddToDo) {
            return (
                <CreateTodoForm showModal={setShowAddToDo} onCreate={fetchToDos} />
            );
        }
        return '';
    };

    return (
            <div>
                <Toolbar showModal={setShowAddToDo}/>
                <div className="TodoPage-container">
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

export default TodoPage;