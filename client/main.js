import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import './main.css';

import {getTasks, addTask} from './actions/tasks';


const store = createStore((state = [], action) => {
    if (action.type === "ADD_TASK") {
        console.log(action.payload);
        addTask("http://localhost:8080/tasks", action.payload)
            .then(
                response => {
                    console.log("response add", response);
                },
                error => console.log("err", error)
            )
        return [
            ...state,
            action.payload
        ]
    } 
    if (action.type === "SHOW_TASKS") {
        return [
            ...state,
            action.payload
        ]
    }
    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// store.dispatch('ADD_TASK', {hello: 1});


store.subscribe(() => {
    console.log('subscribe', store.getState());
});

getTasks("http://localhost:8080/tasks").then(
    response => {
        console.log("promise", response);
        response.map((task) => {
            store.dispatch({type: "SHOW_TASKS", payload: task});
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

