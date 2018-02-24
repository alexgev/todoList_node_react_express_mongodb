import React from 'react';
import { connect } from 'react-redux';

const FinishedTasks = (props) => {
    
    const tableRowsWithFinishedTasks = props.finishedTasks.map((task) => {
        return (
            <tr key={task._id}>
                <td>{task.title}</td>
                <td>{task.text}</td>
                <td>{`${task.created.date}.${task.created.month}.${task.created.year} ${task.created.hours}:${task.created.minutes}:${task.created.seconds}`}</td>
                <td>{`${task.finished.date}.${task.finished.month}.${task.finished.year} ${task.finished.hours}:${task.finished.minutes}`}</td>
            </tr>
        )
    })

    return (
        <table className="finished-tasks__table">
            <caption>Finished Tasks</caption>
            <tbody>
                <tr>
                    <th>Title</th>
                    <th>Text</th>
                    <th>Created</th>
                    <th>Finished</th>
                </tr>
                {
                    tableRowsWithFinishedTasks.reverse()
                }
            </tbody>
        </table>
    )
}

export default connect(
    state => ({
        finishedTasks: state.finishedTasks
    }),
    dispatch => ({})
)(FinishedTasks);
