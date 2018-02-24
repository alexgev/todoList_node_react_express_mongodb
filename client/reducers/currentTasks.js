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

    if (action.type === "DELETE_CURRENT_TASK") {
        return state.filter(task => task._id != action.payload._id);
    }

    return state;
}