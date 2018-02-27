export default function timeToFinish(state = {}, action) {
    if (action.type === "TIME_TO_FINISH") {
        return action.payload;
    }
    return state;
}