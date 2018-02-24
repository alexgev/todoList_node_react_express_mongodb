import React from 'react';
import { connect } from 'react-redux';
import { markTaskAsDone } from '../actions/tasks';

const CurrentTasks = (props) => {
    let saveId = [];

    const handleCompleteTask = (e) => {
        props.onCompleteTask(saveId[e.target.parentElement.parentElement.rowIndex - 1]);
    }

    const tableRowsWithCurrentTasks = props.currentTasks.map((task) => {
        saveId.push(task._id);
        return (
            <tr key={task._id}>
                <td>{task.title}</td>
                <td>{task.text}</td>
                <td>{`${task.created.date}.${task.created.month}.${task.created.year} ${task.created.hours}:${task.created.minutes}:${task.created.seconds}`}</td>
                <td>{`${task.finished.date}.${task.finished.month}.${task.finished.year} ${task.finished.hours}:${task.finished.minutes}`}</td>
                <td><input onClick={handleCompleteTask} type="checkbox"></input></td>
            </tr>
        )
    })
    saveId.reverse();
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