import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';
import { cloneDeep } from 'lodash';
import { getTodos, deleteTodo, updateTodo } from '../ApiServices/TodoService';
import './TodoPage.scss';
import Toolbar from '../Toolbar/Toolbar';
import Modal from '../Modal/Modal';

function TodoPage() {

    const [todos, setTodos] = useState([]);
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetchToDos();
    }, [])

    useEffect(() => {
        setFilteredTodos(todos);
    }, [todos])

    let fetchToDos = () => {
        return getTodos().then(data => {
            return setTodos(data);
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

    let filterByCategory = (cat_id) => {
        if (parseInt(cat_id) === -1) {
            console.log('TODOS', todos);
            setFilteredTodos(todos);
        } else {
            const filtered = todos.filter(td =>
                td.category_id === parseInt(cat_id)
            );
            console.log('FILTERED', filtered);
            setFilteredTodos(filtered);
        }
        console.log('filter by cat', cat_id)

    }

    const ACTIONS = {
        onClose: closeModal,
        showModal: makeModalsVisible,
        updateTodos: setTodos,
        onFilter: filterByCategory
    };
    return (
        <div>
            <Toolbar
                actions={ACTIONS} />
            <div className="TodoPage-container">
                {filteredTodos.map(todo => {
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