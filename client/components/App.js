import React from 'react';
import { connect } from 'react-redux';


import TaskEditor from './TaskEditor';
import './App.css';

const App = (props) => {
    console.log('props.testStore', props.testStore);

    const handleTaskAdd = (dataTitle, dataText, dataCreated, dataFinished) => {
        console.log('data', dataTitle, dataText, dataCreated, dataFinished);
        props.onAddTask({title: dataTitle, text: dataText, created: dataCreated, finished: dataFinished});
    }

    let listOfTasks = props.testStore.map((task, index) => {
        return <li key={index}>{task.title}: {task.text}: {`${task.created.date}.${task.created.month}.${task.created.year} ${task.created.hours}:${task.created.minutes}:${task.created.seconds}`}</li>
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