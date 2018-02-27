import React from 'react';
import { connect } from 'react-redux';

const FinishedTasks = (props) => {
    
    const tableRowsWithFinishedTasks = props.finishedTasks.map((task) => {
        return (
            <tr key={task._id}>
                <td>{task.title}</td>
                <td>{task.text}</td>
                <td>{new Date(task.created).toLocaleString()}</td>
                <td>{new Date(task.finished).toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute:'2-digit'})}</td>
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
