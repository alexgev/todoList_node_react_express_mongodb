export default function finishedTasks(state = [], action) {
    if (action.type === "ADD_FINISHED_TASK") {
        console.log(action.payload);
        
        addFinishedTask(action.payload)
            .then(
                response => {
                    console.log("response add", response);
                    const taskFromDbsWithId = response.ops[0];
                    store.dispatch({type: "FINISHED_TASK_IS_LOADED", payload: taskFromDbsWithId});
                },
                error => console.log("err", error)
            )
    } 

    if (action.type === "FINISHED_TASK_IS_LOADED") {
        return [
            ...state,
            action.payload
        ]
    }

    return state;
}