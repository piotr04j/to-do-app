import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import App from './Components/App';

import Home from './Components/Home';
import Signup from './Containers/auth/Signup';
import Account from './Containers/account/Account';
import reducers from './reducers';

const store = createStore(reducers,{}, applyMiddleware(reduxThunk));


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App >
                <Switch>
                    <Route path='/signup' component={Signup}/>
                    <Route path='/account' component={Account}/>
                    <Route path='/' component={Home}/>
                </Switch>         
            </App>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
)