import React from 'react';

import './TaskEditor.css';

const TaskEditor = (props) => {

    let inputAddTask = '';
    let textareaAddTask = '';

    const addTask = () => {
        console.dir(inputAddTask.value);
        props.onTaskAdd(inputAddTask.value, textareaAddTask.value);
        inputAddTask.value = '';
        textareaAddTask.value = '';
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
    }

    return (
        <div className="task-editor">
            <input ref={input => inputAddTask = input} placeholder="Title" className="task-editor__input"/>
            <textarea ref={textarea => textareaAddTask = textarea} placeholder="Enter todo text" className="task-editor__text" rows="7"></textarea>
            <button onClick={addTask} className="task-editor__button">Add Task</button>
        </div>
    )
}

export default TaskEditor;