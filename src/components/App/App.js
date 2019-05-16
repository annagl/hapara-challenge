import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NotFound from '../routes/NotFound/NotFound';
import Classes from '../routes/Classes/Classes';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Classes}/>
                <Route component={NotFound}/>
            </Switch>
        </Router>
    );
};

export default App;
