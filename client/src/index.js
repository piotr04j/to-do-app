import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './Components/App';

import Home from './Components/Home';
import Signup from './Containers/auth/Signup';



ReactDOM.render(
    <BrowserRouter>
        <App >
            <Switch>
                <Route path='/signup' component={Signup}/>
                <Route path='/' component={Home}/>
            </Switch>         
        </App>
    </BrowserRouter>,
    document.querySelector('#root')
)