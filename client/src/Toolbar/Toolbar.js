import React from 'react';
import './Toolbar.scss';
import CreateTodoForm from '../CreateTodoForm/CreateTodoForm';

function Toolbar(props) {

    return (
        <div className="Toolbar-container">
                <button className="primary-btn" onClick={() => props.showModal(true, <CreateTodoForm onClose={props.onClose} onCreate={props.onCreate}/>)}>Add Todo</button>
                <button className="base-btn" onClick={() => props.showModal(true, <h1> Hello World</h1>)}>Add Category</button>
        </div>
    )
}

export default Toolbar;