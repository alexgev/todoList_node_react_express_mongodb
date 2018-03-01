import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Task = ({match, history, locationl, currentTasks, finishedTasks, timeToFinish}) => {
    let timeToFinishThisTask = '';
    let timeToFinishString = '';
    let task = currentTasks.filter((task, i) => {
        if (`/${task._id}` === location.pathname) {
            timeToFinishThisTask = timeToFinish[i];
            let valueOfMinutes = Math.ceil(timeToFinishThisTask / 1000 / 60);
            if (Math.floor(valueOfMinutes / 60) >= 24) {
                timeToFinishString = `${Math.floor(valueOfMinutes / 60 / 24)}d${Math.floor(valueOfMinutes / 60 % 24)}h${valueOfMinutes % 60}m`;
            } else if (valueOfMinutes >= 60) {
                timeToFinishString = `${Math.floor(valueOfMinutes / 60)}h${valueOfMinutes % 60}m`;
            } else {
                timeToFinishString = `${valueOfMinutes}m`;
            }
            return task;
        }
    });
    if (task.length === 0) {
        task = finishedTasks.filter((task) => {
            if (`/${task._id}` === location.pathname) return task;
        });
    }
    task = task[0];

    const handleCloseTaskPage = (e) => {
        if (!(e.target.className === "task-page" || e.target.className === "task-page__close")) return;
        history.push('/');
    }
    
   
    let startDate = new Date(task.start).toLocaleString();
    let dueDate = new Date(task.due).toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute:'2-digit'});


    return (
        <div className="task-page" onClick={handleCloseTaskPage}>
            <div className="task-page__wrapper">
                <h2 className="task-page__title">{task.title}</h2>
                <span onClick={handleCloseTaskPage} className="task-page__close">x</span>
                <p className="task-page__text">{task.text}</p>
                <div className="task-page__footer">
                    <span className="task-page__start">Start {startDate}</span>
                    <span className="task-page__due">Due {dueDate}</span>
                    {
                        (task.completedTime) ? <span className="task-page__completed">Finish {new Date(task.completedTime).toLocaleString()}</span> : null
                    }
                    {
                        (task.completedTime === 0) ? <span className="task-page__completed">Task not Completed</span> : null
                    }
                    {
                        (timeToFinishThisTask) ? <span className="task-page__completed">Time to finish {timeToFinishString}</span> : null
                    }
                </div>
            </div>
        </div>
    )
}

export default withRouter(connect(
    state => ({
        currentTasks: state.currentTasks,
        finishedTasks: state.finishedTasks,
        timeToFinish: state.timeToFinish
    }),
    dispatch => ({

    })
)(Task));