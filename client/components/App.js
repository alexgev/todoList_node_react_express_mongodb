import React from 'react';
import { connect } from 'react-redux';


import TaskEditor from './TaskEditor';

const App = (props) => {
    console.log('props.testStore', props.testStore);

    const handleTaskAdd = (data) => {
        console.log('data', data);
        props.onAddTask({title: data});
    }

    let listOfTasks = props.testStore.map((task, index) => {
        return <li key={index}>{task.title}</li>
    })

    return (
        <div>
            <h2>Todo Application</h2>
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