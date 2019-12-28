import React from 'react';
import './Toolbar.scss';

function Toolbar(props) {

    return (
        <div className="Toolbar-container">
                <button className="primary-btn" onClick={() => props.showModal(true)}>Add Todo</button>
                <button className="base-btn" onClick={() => props.showModal(true)}>Add Category</button>
        </div>
    )
}

export default Toolbar;