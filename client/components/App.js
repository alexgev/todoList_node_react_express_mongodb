import React from 'react';
import { connect } from 'react-redux';


import TaskEditor from './TaskEditor';

const App = (props) => {
    console.log('props.testStore', props.currentTasks);

    const handleTaskAdd = (dataTitle, dataText, dataCreated, dataFinished) => {
        console.log('data', dataTitle, dataText, dataCreated, dataFinished);
        props.onAddTask({title: dataTitle, text: dataText, created: dataCreated, finished: dataFinished});
    }

    let listOfCurrentTasks = props.currentTasks.map(task => {
        return <li key={task._id}>{`title: ${task.title} | text: ${task.text} | created: ${task.created.date}.${task.created.month}.${task.created.year} ${task.created.hours}:${task.created.minutes}:${task.created.seconds} | finished ${task.finished.date}.${task.finished.month}.${task.finished.year} ${task.finished.hours}:${task.finished.minutes}`}</li>
    })

    let listOfFinishedTasks = props.finishedTasks.map(task => {
        return <li key={task._id}>{`title: ${task.title} | text: ${task.text} | created: ${task.created.date}.${task.created.month}.${task.created.year} ${task.created.hours}:${task.created.minutes}:${task.created.seconds} | finished ${task.finished.date}.${task.finished.month}.${task.finished.year} ${task.finished.hours}:${task.finished.minutes}`}</li>
    })

    return (
        <div className="app">
            <h2 className="app__title">Todo Application</h2>
            <TaskEditor onTaskAdd={handleTaskAdd} />
            {
                listOfCurrentTasks.reverse()
            }
            <h2>Finished</h2>
            {
                listOfFinishedTasks.reverse()
            }
        </div>
    )
}

export default connect(
    store => ({
        currentTasks: store.currentTasks,
        finishedTasks: store.finishedTasks
    }),
    dispatch => ({
        onAddTask: (task) => {
            dispatch({type: "ADD_TASK", payload: task})
        } 
    })
)(App);