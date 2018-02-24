import React from 'react';
import { connect } from 'react-redux';


import TaskEditor from './TaskEditor';
import CurrentTasks from './CurrentTasks';
import FinishedTasks from './FinishedTasks';

import {getCurrentTasks, getFinishedTasks, addCurrentTask, addFinishedTask} from '../actions/tasks';


const App = (props) => {

    const handleTaskAdd = (dataTitle, dataText, dataCreated, dataFinished) => {
        props.onAddTask({title: dataTitle, text: dataText, created: dataCreated, finished: dataFinished});
    }
    return (
        <div className="app">
            <h2 className="app__title">Todo Application</h2>
            <TaskEditor onTaskAdd={handleTaskAdd} />
            <div className="app__div-with-tables">
                <CurrentTasks />
                <div className="div-with-tables__border-between-tables">
                </div>
                <FinishedTasks />
            </div>
        </div>
    )
}

export default connect(
    state => ({
        currentTasks: state.currentTasks,
        finishedTasks: state.finishedTasks
    }),
    dispatch => {
        dispatch(getCurrentTasks());
        dispatch(getFinishedTasks());
        return {
            onAddTask: (task) => {
                dispatch(addCurrentTask(task));
            },
            onAddFinishedTask: (task) => {
                dispatch(addFinishedTask(task));
            }
        }
    }
)(App);