import React from 'react';

const TaskEditor = (props) => {

    let inputAddTask = '';

    const addTask = () => {
        console.dir(inputAddTask.value);
        props.onTaskAdd(inputAddTask.value);
        inputAddTask.value = '';
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmitForm}>
                <input ref={input => inputAddTask = input} placeholder="Title"/>
                <button onClick={addTask}>Add Task</button>
            </form>
        </div>
    )
}

export default TaskEditor;