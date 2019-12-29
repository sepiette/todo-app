import React from 'react';
import '../CreateTodoForm/CreateTodoForm.scss'
import { createCategory, getCategories } from '../ApiServices/CategoryService';

function CreateCategoryForm(props) {
    const DEFAULT_CATEGORY = {
        name: '',
        description: ''
    };
    let newCat = { ...DEFAULT_CATEGORY };

    let addCategory = () => {
        createCategory(newCat).then(() => getCategories().then(data => props.onCreate(data)));
        newCat = { ...DEFAULT_CATEGORY };
        props.onClose();
    };

    return (
        <div className="CreateTodo-container">
            <h3>Create Category</h3>
            <input className="CreateTodo-title"
                type="text"
                placeholder="Category Name"
                onChange={(e) => { newCat.name = e.target.value }}></input>
            <textarea className="CreateTodo-description"
                placeholder="Category Description"
                onChange={(e) => { newCat.description = e.target.value }} />

            <button className="primary-btn" onClick={() => addCategory()}>Add Category</button>
        </div>

    )
}

export default CreateCategoryForm;