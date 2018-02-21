import React from 'react';
import { connect } from 'react-redux';


import TaskEditor from './TaskEditor';

const App = (props) => {
    console.log('props.testStore', props.testStore);

    const handleTaskAdd = (data) => {
        console.log('data', data);
        props.onAddTask(data);
    }

    return (
        <div>
            <h2>Todo Application</h2>
            <TaskEditor onTaskAdd={handleTaskAdd}/>
            {
                props.testStore.reverse().map((task, index) => {
                    return <li key={index}>{task}</li>
                })
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