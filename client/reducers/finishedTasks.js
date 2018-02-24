export default function finishedTasks(state = [], action) {
    if (action.type === "INITIAL_FINISHED_TASK") {
        return action.payload;
    } 

    if (action.type === "ADD_FINISHED_TASK") {
        return [
            ...state,
            action.payload
        ]
    }

    return state;
}