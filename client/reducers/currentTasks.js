export default function currentTasks(state = [], action) {
    if (action.type === "ADD_TASK") {
        console.log(action.payload);
        
        addCurrentTask(action.payload)
            .then(
                response => {
                    console.log("response add", response);
                    const taskFromDbsWithId = response.ops[0];
                    store.dispatch({type: "CURRENT_TASK_IS_LOADED", payload: taskFromDbsWithId});
                },
                error => console.log("err", error)
            )
    } 

    if (action.type === "CURRENT_TASK_IS_LOADED") {
        return [
            ...state,
            action.payload
        ]
    }

    return state;
}