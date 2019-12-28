import React from 'react';
import './App.css';
import {
    Switch,
    Route
} from "react-router-dom";

import Nav from './Nav/Nav';
import TodoPage from './Todo/TodoPage';
import Login from './Login/Login';

function App() {

    return (
        <div className="App">
            <Nav />

            <Switch>
                <Route path="/" exact>
                    <TodoPage />
                </Route>
                <Route path="/login" exact> 
                    <Login />
                </Route>
            </Switch>
        </div>
    );
}

export default App;