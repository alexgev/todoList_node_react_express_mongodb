import React from 'react';
import { connect } from 'react-redux';
import { markTaskAsDone } from '../actions/tasks';

let timerId = 0;
let initialComponent = true;

const CurrentTasks = (props) => {

    // const dispatchToChangeTimeToFinished = (currentTasks) => {
    //     let arrOfTime = [];
    //     let arrOfIds = [];
    //     for (let i = 0; i < props.currentTasks.length; i++) {
    //         if (Date.now() > props.currentTasks[i].finished) {
    //             // console.log('finished!!!!!!!!!!!!');
    //             props.onCompleteTask(props.currentTasks[i]._id);
    //         } else {
    //             arrOfTime.push(props.currentTasks[i].finished - Date.now());
    //             arrOfIds.push(props.currentTasks[i]._id);
    //             // console.log(currentTasks);
    //             // clearInterval(timerId);                
    //             // console.log('Not finished!!!!!!!!!!!!!');
    //         }
    //     }
    //     props.timeToFinish(arrOfTime, arrOfIds);
    //     arrOfTime = [];
    //     arrOfIds = [];
    //     initialComponent = false;
    // }

    // if (props.currentTasks.length > 0 && initialComponent === true) {
    //     dispatchToChangeTimeToFinished(props.currentTasks);
    //     initialComponent = false;
    //     console.log('init');
    // } else {
    //    console.log('not init');
    // }

    const handleCompleteTask = (task) => {
        console.log(task);
        props.onCompleteTask(task._id);
    }

    // if (initialComponent == true) {
    //     console.log(props.currentTasks);
    //     let arrOfTime = [];
    //     let arrOfIds = [];
    //     for (let i = 0; i < props.currentTasks.length; i++) {
    //         if (Date.now() > props.currentTasks[i].finished) {
    //             // console.log('finished!!!!!!!!!!!!');
    //             props.onCompleteTask(props.currentTasks[i]._id);
    //         } else {
    //             arrOfTime.push(props.currentTasks[i].finished - Date.now());
    //             arrOfIds.push(props.currentTasks[i]._id);
    //             // console.log(currentTasks);
    //             // clearInterval(timerId);                
    //             // console.log('Not finished!!!!!!!!!!!!!');
    //         }
    //     }
    //     props.timeToFinish(arrOfTime, arrOfIds);
    //     arrOfTime = [];
    //     arrOfIds = [];
    //     initialComponent = false;
    // }

    const calcTimeToFinish = (currentTasks) => {
        // console.log('timeToFinish', currentTasks);
        clearInterval(timerId);
        let arrOfTime = [];
        let arrOfIds = [];
        // if (initialComponent === true) {
        //     for (let i = 0; i < props.currentTasks.length; i++) {
        //         if (Date.now() > props.currentTasks[i].finished) {
        //             // console.log('finished!!!!!!!!!!!!');
        //             props.onCompleteTask(props.currentTasks[i]._id);
        //         } else {
        //             arrOfTime.push(props.currentTasks[i].finished - Date.now());
        //             arrOfIds.push(props.currentTasks[i]._id);
        //             // console.log(currentTasks);
        //             // clearInterval(timerId);                
        //             // console.log('Not finished!!!!!!!!!!!!!');
        //         }
        //     }
        //     props.timeToFinish(arrOfTime, arrOfIds);
        //     arrOfTime = [];
        //     arrOfIds = [];
        //     initialComponent = false;
        // }
        timerId = setInterval(() => {
            for (let i = 0; i < currentTasks.length; i++) {
                if (Date.now() > currentTasks[i].finished) {
                    // console.log('finished!!!!!!!!!!!!');
                    props.onCompleteTask(currentTasks[i]._id);
                } else {
                    arrOfTime.push(currentTasks[i].finished - Date.now());
                    arrOfIds.push(currentTasks[i]._id);
                    // console.log(currentTasks);
                    // clearInterval(timerId);                
                    // console.log('Not finished!!!!!!!!!!!!!');
                }
            }
            props.timeToFinish(arrOfTime, arrOfIds);
            arrOfTime = [];
            arrOfIds = [];
        }, 5000);
        
    }

    calcTimeToFinish(props.currentTasks);

    const tableRowsWithCurrentTasks = props.currentTasks.map((task, i) => {
        // console.log(props.stateOfTimeToFinish);
        return (
            <tr key={task._id}>
                <td>{task.title}</td>
                <td>{task.text}{props.stateOfTimeToFinish.timeToFinish ? Math.floor(props.stateOfTimeToFinish.timeToFinish[i] / 1000) : null}</td>
                <td>{new Date(task.created).toLocaleString()}</td>
                <td>{new Date(task.finished).toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute:'2-digit'})}</td>
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
        currentTasks: state.currentTasks,
        stateOfTimeToFinish: state.timeToFinish
    }),
    dispatch => ({
        onCompleteTask: (idOfTask) => {
            dispatch(markTaskAsDone(idOfTask));
        },
        timeToFinish: (timeToFinish, idOfTask) => {
            dispatch({type: "TIME_TO_FINISH", payload: {timeToFinish, idOfTask}})
        }
    })
)(CurrentTasks);