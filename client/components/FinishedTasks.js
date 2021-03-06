import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const FinishedTasks = (props) => {

    const handleOnClickTr = (task, event) => {
        props.history.push(`/${task._id}`);
    }
    
    const tableRowsWithFinishedTasks = props.finishedTasks.map((task) => {
        let startDate = new Date(task.start).toLocaleString().split(", ");
        let dueDate = new Date(task.due).toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute:'2-digit'}).split(', ');
        const completedString = () => {
            if (task.completedTime === 0) {
                return (
                    <td>
                        {'Not completed'}
                    </td>
                )
            }
            let completedDate = new Date(task.completedTime).toLocaleString().split(", ");
            return (
                <td>
                    {completedDate[0]}
                    <br />
                    {completedDate[1]}
                </td>
            )
        }
        return (
            <tr key={task._id} onClick={handleOnClickTr.bind(null, task)} className={(task.completedTime === 0) ? 'not-completed-task' : 'completed-task'}>
                <td>{task.title}</td>
                <td>{task.text}</td>
                <td>
                    {startDate[0]}
                    <br />
                    {startDate[1]}
                </td>
                <td>
                    {dueDate[0]}
                    <br />
                    {dueDate[1]}
                </td>
                {
                    completedString()
                }
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
                    <th>Completed</th>
                </tr>
                {
                    tableRowsWithFinishedTasks.reverse()
                }
            </tbody>
        </table>
    )
}

export default withRouter(connect(
    state => ({
        finishedTasks: state.finishedTasks
    }),
    dispatch => ({})
)(FinishedTasks));
