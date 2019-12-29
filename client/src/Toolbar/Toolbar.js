import React, { useState, useEffect } from 'react';
import './Toolbar.scss';
import CreateTodoForm from '../CreateTodoForm/CreateTodoForm';
import CreateCategoryForm from '../CreateCategoryForm/CreateCategoryForm';
import { getCategories } from '../ApiServices/CategoryService';

function Toolbar(props) {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        getCategories().then(data => {
            setCategories(data);
        })
    }, [])

    let openModal = (key) => {
        if (key === 'todo') {
            return props.actions
                .showModal(true,
                    <CreateTodoForm
                        onClose={props.actions.onClose}
                        onCreate={props.actions.updateTodos} />);

        } else if (key === 'category') {
            return props.actions
                .showModal(true,
                    <CreateCategoryForm
                        onClose={props.actions.onClose}
                        onCreate={setCategories} />);
        }
    }
    return (
        <div className="Toolbar-container">
            <button className="primary-btn"
                onClick={() => openModal('todo')}>Add Todo</button>
            <button className="base-btn"
                onClick={() => openModal('category')}>Add Category</button>
            | 
            <span className="label">Filter By: </span>
            <select className="toolbar" onChange={(e) => props.actions.onFilter(e.target.value) }>
                <option defaultValue value="-1">All Categories</option>
                {categories.map(cat => {
                    return <option
                        key={`category-${cat.id}`}
                        value={cat.id}>{cat.name}</option>
                })}

            </select>
        </div>
    )
}

export default Toolbar;