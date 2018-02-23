import React from 'react';


const TaskEditor = (props) => {

    let inputAddTask = '';
    let textareaAddTask = '';
    let inputDateTask = '';
    let inputHoursTask = '';
    let inputMinutesTask = '';
    let checkBoxTime = '';
    let textShowTime = '';
    let finishHours = 0;
    let finishMinutes = 0;
    const hourPattern = /[0,1][0-9]|2[0-3]/;
    const minutePattern = /[0-5][0-9]/;

    const addTask = () => {

        if (!hourPattern.test(inputHoursTask.value) && inputHoursTask.value) return;
        if (!minutePattern.test(inputMinutesTask.value) && inputMinutesTask.value) return;

        if (inputAddTask.value === "" || textareaAddTask.value === "" || inputDateTask.value === "") {
            return;
        }

        const dateObj = new Date();
        const created = {
            year: dateObj.getFullYear(),
            month: dateObj.getMonth() + 1,
            date: dateObj.getDate(),
            hours: dateObj.getHours(),
            minutes: dateObj.getMinutes(),
            seconds: dateObj.getSeconds()
        };
        const splitFinishDate = inputDateTask.value.split("-");
        const finished = {
            year: +splitFinishDate[0],
            month: +splitFinishDate[1],
            date: +splitFinishDate[2],
            hours: +inputHoursTask.value,
            minutes: +inputMinutesTask.value
        }


       console.log(inputAddTask.value, textareaAddTask.value, created, finished);
        props.onTaskAdd(inputAddTask.value, textareaAddTask.value, created, finished);
        inputAddTask.value = '';
        textareaAddTask.value = '';
        inputDateTask.value = '';
        inputHoursTask.value = '';
        inputMinutesTask.value = '';
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
    }

    const handleCheckbox = (e) => {
        if (checkBoxTime.checked === false) {
            inputHoursTask.style.display = "none";
            inputMinutesTask.style.display = "none";
            textShowTime.style.display = "";
        } else {
            inputHoursTask.style.display = "";
            inputMinutesTask.style.display = "";
            textShowTime.style.display = "none";
        }

    }

    return (
        <div className="task-editor">
            <form onSubmit={handleSubmitForm}>
                <input ref={input => inputAddTask = input} placeholder="Title" className="task-editor__input" required/>
                <textarea ref={textarea => textareaAddTask = textarea} placeholder="Enter todo text" className="task-editor__text" rows="7" required></textarea>
                <div className="task-editor__footer-inputs-buttons">
                    <input type="date" ref={inputDate => inputDateTask = inputDate} className="task-editor__input-date" required/>
                    <span ref={span => textShowTime = span} className="task-editor__span">show time area:</span>
                    <input type="checkbox" ref={checkbox => checkBoxTime = checkbox} onChange={handleCheckbox} className="task-editor__input-checkbox"/>
                    <input type="text" ref={inputDate => inputHoursTask = inputDate} className="task-editor__input-hours" maxLength="2" pattern="[0,1][0-9]|2[0-3]" placeholder="hour" style={{display: "none"}}/>
                    <input type="text" ref={inputDate => inputMinutesTask = inputDate} className="task-editor__input-minutes" pattern="[0-5][0-9]" placeholder="min" style={{display: "none"}}/>
                    <button onClick={addTask} className="task-editor__button">Add Task</button>
                </div>
            </form>
        </div>
    )
}

export default TaskEditor;