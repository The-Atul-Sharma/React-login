import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Admin from '../../Container/Admin/Admin';
import Login from '../../Container/Login/Login';
import './App.css';

const App = () => (
    // Application routing
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Admin} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/forgot-password" component={Admin} />
                <Route exact path="/subscribe" component={Admin} />
            </Switch>
        </div>
    </Router>
);

export default App;
