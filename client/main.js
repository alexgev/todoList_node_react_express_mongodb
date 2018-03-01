import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import App from './components/App';
import './main.css';
import Task from './components/Task';

import {getCurrentTasks, addCurrentTask, getFinishedTasks, addFinishedTask} from './actions/tasks';
import reducer from './reducers';


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));


store.subscribe(() => {
    // console.log('subscribe', store.getState());
});


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route path="/" component={App} />
                <Route path="/:id" component={Task} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('app')
);

