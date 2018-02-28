import { addCurrentTaskToApi, addFinishedTaskToApi, getCurrentTasksFromApi, getFinishedTasksFromApi, markTaskAsDoneInApi } from '../requestsToApi';

const getCurrentTasks = () => {
    return dispatch => {
        getCurrentTasksFromApi().then(
            result => {
                dispatch({type: 'INITIAL_CURRENT_TASK', payload: result});
                dispatch({type: 'TIME_TO_FINISH', payload: result.map((task) => {
                    return task.due - Date.now();
                })});
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
                dispatch({ type: 'NEW_TASK_TIME_TO_FINISH', payload: newTaskFromApi.due - Date.now() });
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

const markTaskAsDone = (idOfTask, completed) => {
    return dispatch => {
        markTaskAsDoneInApi(idOfTask, completed).then(
            result => {
                console.log(result);
                dispatch({ type: 'DELETE_CURRENT_TASK', payload: result });
                dispatch({ type: 'ADD_FINISHED_TASK', payload: result })
            },
            err => console.log(err)
        )
    }
}


export {getCurrentTasks, getFinishedTasks, addCurrentTask, addFinishedTask, markTaskAsDone};