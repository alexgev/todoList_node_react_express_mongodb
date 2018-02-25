export default function time(state = "0:00:00", action) {
    if (action.type === "CHANGE_TIME") {
        return action.payload;
    }
    return state;
}
