import React from 'react';
import { connect } from 'react-redux';
import { markTaskAsDone } from '../actions/tasks';

let timerId = 0;

const CurrentTasks = (props) => {

    const handleCompleteTask = (task) => {
        console.log(task);
        props.onCompleteTask(task._id);
    }

    const calcTimeToFinish = (currentTasks) => {
        clearInterval(timerId);
        let arrOfTime = [];

        timerId = setInterval(() => {
            for (let i = 0; i < currentTasks.length; i++) {
                if (Date.now() > currentTasks[i].due) {
                    props.onCompleteTask(currentTasks[i]._id);
                } else {
                    arrOfTime.push(currentTasks[i].due - Date.now());

                }
            }
            props.timeToFinish(arrOfTime);
            arrOfTime = [];
        }, 3000);
        
    }

    calcTimeToFinish(props.currentTasks);

    const tableRowsWithCurrentTasks = props.currentTasks.map((task, i) => {
        let valueOfMinutes = Math.ceil(props.stateOfTimeToFinish[i] / 1000 / 60);
        let timeToFinishString = '';
        if (Math.floor(valueOfMinutes / 60) >= 24) {
            timeToFinishString = `${Math.floor(valueOfMinutes / 60 / 24)}d${Math.floor(valueOfMinutes / 60 % 24)}h${valueOfMinutes % 60}m`;
        } else if (valueOfMinutes >= 60) {
            timeToFinishString = `${Math.floor(valueOfMinutes / 60)}h${valueOfMinutes % 60}m`;
        } else {
            timeToFinishString = `${valueOfMinutes}m`;
        }
        let startDate = new Date(task.start).toLocaleString().split(", ");
        let dueDate = new Date(task.due).toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute:'2-digit'}).split(', ');
        return (
            <tr key={task._id}>
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
                <td>{timeToFinishString ? timeToFinishString : null}</td>
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
                    <th>Start</th>
                    <th>Due</th>
                    <th>Est.</th>
                    <th>Comp.</th>
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
        currentTasks: state.currentTasks,
        stateOfTimeToFinish: state.timeToFinish
    }),
    dispatch => ({
        onCompleteTask: (idOfTask) => {
            dispatch(markTaskAsDone(idOfTask));
        },
        timeToFinish: (timeToFinish) => {
            dispatch({type: "TIME_TO_FINISH", payload: timeToFinish})
        }
    })
)(CurrentTasks);