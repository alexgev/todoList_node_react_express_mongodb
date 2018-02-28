import React from 'react';
import { connect } from 'react-redux';


import TaskEditor from './TaskEditor';
import CurrentTasks from './CurrentTasks';
import FinishedTasks from './FinishedTasks';
import Clock from './Clock';

import {getCurrentTasks, getFinishedTasks, addCurrentTask, addFinishedTask} from '../actions/tasks';


const App = (props) => {

    const handleTaskAdd = (dataTitle, dataText, dataCreated, dataFinished) => {
        if ((Date.now() > dataFinished)) {
            props.onAddFinishedTask({title: dataTitle, text: dataText, start: dataCreated, due: dataFinished});
            return;
        }
        props.onAddTask({title: dataTitle, text: dataText, start: dataCreated, due: dataFinished});
    }
    return (
        <div className="app">
            <header className="header">
                <h2 className="app__title">Todo Application</h2>
                <TaskEditor onTaskAdd={handleTaskAdd} />
                <Clock />
            </header>
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