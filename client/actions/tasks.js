import { addCurrentTaskToApi, addFinishedTaskToApi, getCurrentTasksFromApi, getFinishedTasksFromApi, markTaskAsDoneInApi } from '../requestsToApi';

const getCurrentTasks = () => {
    return dispatch => {
        getCurrentTasksFromApi().then(
            result => {
                dispatch({type: 'INITIAL_CURRENT_TASK', payload: result});
            },
            err => console.log(err)
        )
    }
}

const getFinishedTasks = () => {
    return dispatch => {
        getFinishedTasksFromApi().then(
            result => {
                dispatch({type: 'INITIAL_FINISHED_TASK', payload: result});
            },
            err => console.log(err)
        )
    }
}


const addCurrentTask = (task) => {
    return dispatch => {
        addCurrentTaskToApi(task).then(
            result => {
                const newTaskFromApi = result.ops[0];
                dispatch({type: 'ADD_CURRENT_TASK', payload: newTaskFromApi});
            },
            err => console.log(err)
        )
    }
}

const addFinishedTask = (task) => {
    return dispatch => {
        addFinishedTaskToApi(task).then(
            result => {
                const newTaskFromApi = result.ops[0];
                dispatch({type: 'ADD_FINISHED_TASK', payload: newTaskFromApi});
            },
            err => console.log(err)
        )
    }
}

const markTaskAsDone = (idOfTask) => {
    return dispatch => {
        markTaskAsDoneInApi(idOfTask).then(
            result => {
                const changedTaskFromApi = result.ops[0];
                dispatch({type: 'DELETE_CURRENT_TASK', payload: changedTaskFromApi});
                dispatch({ type: 'ADD_FINISHED_TASK', payload: changedTaskFromApi })
            },
            err => console.log(err)
        )
    }
}

// const timeToFinish = (time, idOfTask) => {

// }

export {getCurrentTasks, getFinishedTasks, addCurrentTask, addFinishedTask, markTaskAsDone};