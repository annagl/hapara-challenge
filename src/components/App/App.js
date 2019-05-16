import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Teacher from '../routes/Teacher/Teacher';
import Student from '../routes/Student/Student';

const App = () => {
    return (
        <Router>
            <Route exact path="/" component={Teacher}/>
            <Route path="/student" component={Student}/>
        </Router>
    );
};

export default App;
