export default function timeToFinish(state = [], action) {
    if (action.type === "TIME_TO_FINISH") {
        return action.payload;
    }
    if (action.type === "NEW_TASK_TIME_TO_FINISH") {
        return [
            ...state,
            action.payload
        ]
    }
    return state;
}