import React from 'react';
import { connect } from 'react-redux';


import TaskEditor from './TaskEditor';
import './App.css';

const App = (props) => {
    console.log('props.testStore', props.testStore);

    const handleTaskAdd = (dataTitle, dataText) => {
        console.log('data', dataTitle, dataText);
        props.onAddTask({title: dataTitle, text: dataText});
    }

    let listOfTasks = props.testStore.map((task, index) => {
        return <li key={index}>{task.title}: {task.text}</li>
    })

    return (
        <div className="app">
            <h2 className="app__title">Todo Application</h2>
            <TaskEditor onTaskAdd={handleTaskAdd}/>
            {
                listOfTasks.reverse()
            }
        </div>
    )
}

export default connect(
    store => ({
        testStore: store
    }),
    dispatch => ({
        onAddTask: (task) => {
            dispatch({type: "ADD_TASK", payload: task})
        } 
    })
)(App);