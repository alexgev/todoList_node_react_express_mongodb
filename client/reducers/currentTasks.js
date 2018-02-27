export default function currentTasks(state = [], action) {
    if (action.type === "INITIAL_CURRENT_TASK") {
        return  action.payload;  
    } 

    if (action.type === "ADD_CURRENT_TASK") {
        return [
            ...state,
            action.payload
        ]
    }

    // if (action.type === "TIME_TO_FINISH") {
    //     console.log('state', state, 'id', action.payload[1], 'timeToFinish', action.payload[0]);
    //     return state.map(task => {
    //         if (task._id === action.payload[1]) {
    //             console.log('task', task);
    //             task.timeToFinish = action.payload[0];
    //             return task;
    //         }
    //         return task;
    //     })
    // }

    if (action.type === "DELETE_CURRENT_TASK") {
        return state.filter(task => task._id != action.payload._id);
    }

    return state;
}