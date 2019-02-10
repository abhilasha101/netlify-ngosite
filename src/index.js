import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Contactus from "./containers/Contactus"
import Home from "./containers/Home"

import {BrowserRouter as Router, Route } from 'react-router-dom'

const myComponent =(
    <Router>
    <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/contactus" component= {Contactus} />
        </div>
    </Router>
)


ReactDOM.render(myComponent, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
