import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';
import { cloneDeep } from 'lodash';
import { getTodos, deleteTodo, updateTodo } from '../ApiServices/TodoService';
import './TodoPage.scss';
import CreateTodoForm from '../CreateTodoForm/CreateTodoForm';
import Toolbar from '../Toolbar/Toolbar';
import Modal from '../Modal/Modal';

function TodoPage() {

    const [todos, setTodos] = useState([]);
    const [showModal, setShowModal] = useState(false);

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

    let makeModalsVisible = (show, modalContent) => {
        setShowModal(show);
        if (showModal) {
            ReactDOM.render(
            <Modal onClose={closeModal} modalBody={modalContent} />,
             document.getElementById('modal'));
        }
    }

    let closeModal = () => {
        const el = document.getElementById('modal');
        ReactDOM.unmountComponentAtNode(el);
    }

    return (
        <div>
            <Toolbar onClose={closeModal} showModal={makeModalsVisible} onCreate={fetchToDos} />
            <div className="TodoPage-container">
                {todos.map(todo => {
                    return <Todo key={todo.id}
                        todo={todo}
                        removeTodo={removeTodo}
                        updateCompleted={updateCompletedTodo} />
                })}
            </div>
            <div id="modal">

            </div>
        </div>

    );
}

export default TodoPage;