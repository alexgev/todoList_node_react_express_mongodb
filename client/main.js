import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import './main.css';


const store = createStore((state = [], action) => {
    if (action.type === "ADD_TASK") {
        return [
            ...state,
            action.payload
        ]
    } 
    return state;
})

// store.dispatch('ADD_TASK', {hello: 1});


store.subscribe(() => {
    console.log('subscribe', store.getState());
});

store.dispatch({type: "ADD_TASK", payload: "first task"});
store.dispatch({type: "ADD_TASK", payload: "second task"});
store.dispatch({type: "ADD_TASK", payload: "third task"});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);

