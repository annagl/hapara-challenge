import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import logo from '../assets/images/logo.svg';
import './App.scss';

const Teacher = () => {
    return (
        <div>
            <h1>Teacher</h1>
        </div>
    );
};

const Student = () => {
    return (
        <div>
            <h1>Student</h1>
        </div>
    );
};

const App = () => {
    return (
        <Router>
            <div>
                <img src={logo} className="App-logo" alt="logo" />
                <ul>
                    <li>
                        <Link to="/">Teacher</Link>
                    </li>
                    <li>
                        <Link to="/student">Student</Link>
                    </li>
                </ul>

                <hr/>

                <Route exact path="/" component={Teacher}/>
                <Route path="/student" component={Student}/>
            </div>
        </Router>
    );
};

export default App;
