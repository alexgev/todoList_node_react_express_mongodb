import React from 'react';
import { connect } from 'react-redux';
import { markTaskAsDone } from '../actions/tasks';

const CurrentTasks = (props) => {

    const handleCompleteTask = (task) => {
        console.log(task);
        props.onCompleteTask(task._id);
    }

    const tableRowsWithCurrentTasks = props.currentTasks.map((task) => {
        return (
            <tr key={task._id}>
                <td>{task.title}</td>
                <td>{task.text}</td>
                <td>{`${task.created.date}.${task.created.month}.${task.created.year} ${task.created.hours}:${task.created.minutes}:${task.created.seconds}`}</td>
                <td>{`${task.finished.date}.${task.finished.month}.${task.finished.year} ${task.finished.hours}:${task.finished.minutes}`}</td>
                <td><input onClick={handleCompleteTask.bind(null, task)} type="checkbox" className="current-task-table__complete-input"></input></td>
            </tr>
        )
    })
    return (
        <table className="current-tasks__table">
            <caption>Current Tasks</caption>
            <tbody>
                <tr>
                    <th>Title</th>
                    <th>Text</th>
                    <th>Created</th>
                    <th>Finished</th>
                    <th>Complete</th>
                </tr>
                {
                    tableRowsWithCurrentTasks.reverse()
                }
            </tbody>
        </table>
    )
}

export default connect(
    state => ({
        currentTasks: state.currentTasks
    }),
    dispatch => ({
        onCompleteTask: (idOfTask) => {
            dispatch(markTaskAsDone(idOfTask));
        }
    })
)(CurrentTasks);