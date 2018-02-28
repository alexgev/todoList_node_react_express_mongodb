import React from 'react';
import { connect } from 'react-redux';

const FinishedTasks = (props) => {
    
    const tableRowsWithFinishedTasks = props.finishedTasks.map((task) => {
        let createdDate = new Date(task.start).toLocaleString().split(", ");
        let finishDate = new Date(task.due).toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute:'2-digit'}).split(', ');
        return (
            <tr key={task._id}>
                <td>{task.title}</td>
                <td>{task.text}</td>
                <td>
                    {createdDate[0]}
                    <br />
                    {createdDate[1]}
                </td>
                <td>
                    {finishDate[0]}
                    <br />
                    {finishDate[1]}
                </td>
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
                    <th>Start</th>
                    <th>Due</th>
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
