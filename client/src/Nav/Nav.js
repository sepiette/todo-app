import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

function Nav() {
    return (
        <div className="Nav">
            <h1 className="Nav-title">Todos</h1>
            <div className="Nav-links">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
            </div>
        </div>
    )
}

export default Nav;