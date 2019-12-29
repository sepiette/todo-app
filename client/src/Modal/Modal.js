import React from 'react';
import './Modal.scss';

function Modal(props) {

    return (
        <div id="Modal" className="Modal-overlay"
            onClick={(e) => {
                return e.target.className.includes('overlay')
                    ? props.onClose()
                    : null
            }}>
                <div className="Modal-container">
                    <i className="icofont-close close-icon" onClick={() => props.onClose()}></i>
                    <div className="Modal-body">
                        {props.modalBody}
                    </div>

                </div>

        </div>

    )
}

export default Modal;