import config from '../../etc/config.json';

const getCurrentTasksFromApi = () => {
    return new Promise((resolve, reject) => {
        const xml = new XMLHttpRequest();
        xml.open("GET", `${config.apiPrefix}/${config.db.name}`);
        xml.onload = () => {
            if (xml.status != 200) {
                let error = new Error(xml.statusText);
                error.code = xml.status;
                reject(error);
            } 
            resolve(JSON.parse(xml.response));
        }
        xml.send();
    })
}

const getFinishedTasksFromApi = () => {
    return new Promise((resolve, reject) => {
        const xml = new XMLHttpRequest();
        xml.open("GET", `${config.apiPrefix}/${config.db.name}/${config.db.finishedURL}`);
        xml.onload = () => {
            if (xml.status != 200) {
                let error = new Error(xml.statusText);
                error.code = xml.status;
                reject(error);
            } 
            resolve(JSON.parse(xml.response));
        }
        xml.send();
    })
}

const addCurrentTaskToApi = (data) => {
    return new Promise((resolve, reject) => {
        const xml = new XMLHttpRequest();
        xml.open("POST", `${config.apiPrefix}/${config.db.name}`);
        xml.setRequestHeader("Content-Type", "application/json");
        xml.onload = () => {
            if (xml.status != 200) {
                let error = new Error(xml.statusText);
                error.code = xml.status;
                reject(error);
            } 
            resolve(JSON.parse(xml.response));
        }
        data = JSON.stringify(data);
        xml.send(data);
    })
}

const addFinishedTaskToApi = (data) => {
    return new Promise((resolve, reject) => {
        const xml = new XMLHttpRequest();
        xml.open("POST", `${config.apiPrefix}/${config.db.name}/${config.db.finishedURL}`);
        xml.setRequestHeader("Content-Type", "application/json");
        xml.onload = () => {
            if (xml.status != 200) {
                let error = new Error(xml.statusText);
                error.code = xml.status;
                reject(error);
            } 
            resolve(JSON.parse(xml.response));
        }
        data = JSON.stringify(data);
        xml.send(data);
    })
}

const markTaskAsDoneInApi = (idOfTask, completed) => {
    return new Promise((resolve, reject) => {
        const xml = new XMLHttpRequest();
        xml.open("PUT", `${config.apiPrefix}/${config.db.name}/${idOfTask}`);
        xml.setRequestHeader('Content-Type', "application/json");
        xml.onload = () => {
            if (xml.status != 200) {
                let error = new Error(xml.statusText);
                error.code = xml.status;
                reject(error);
            } 
            resolve(JSON.parse(xml.response));
        }
        let completedTime = 0;
        (completed === true) ? completedTime = Date.now() : null;
        xml.send(JSON.stringify({completedTime: completedTime}));
    })
}

export { getCurrentTasksFromApi, getFinishedTasksFromApi, addCurrentTaskToApi, addFinishedTaskToApi, markTaskAsDoneInApi };