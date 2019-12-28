import React from 'react';

function Login(props) {

    let login = () => {
        console.log('Logging in...')
    };

    return (
        <div className="CreateTodoForm">
            <h3>Login</h3>
            <input className="CreateTodo-title"
                type="text"
                placeholder="Email"></input>
            <input className="CreateTodo-title"
                type="password"
                placeholder="Password"></input>
            <button className="primary-btn" onClick={() => login()}>Login</button>
        </div>
    )
}

export default Login;