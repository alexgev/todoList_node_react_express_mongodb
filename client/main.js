import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import './main.css';

import {getCurrentTasks, addCurrentTask, getFinishedTasks, addFinishedTask} from './actions/tasks';
import reducer from './reducers';


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// store.dispatch('ADD_TASK', {hello: 1});


store.subscribe(() => {
    console.log('subscribe', store.getState());
});

getCurrentTasks().then(
    response => {
        console.log("promise", response);
        response.map((task) => {
            store.dispatch({type: "CURRENT_TASK_IS_LOADED", payload: task});
        })
    },
    error => console.log("err from promise", error)
).catch(error => console.log(error));

getFinishedTasks().then(
    response => {
        console.log("promise, finishedTasks", response);
        response.map((task) => {
            store.dispatch({type: "FINISHED_TASK_IS_LOADED", payload: task});
        })
    },
    error => console.log("err from promise", error)
).catch(error => console.log(error));


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);

