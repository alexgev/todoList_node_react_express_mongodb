import config from '../../etc/config.json';

const getCurrentTasks = () => {
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

const getFinishedTasks = () => {
    return new Promise((resolve, reject) => {
        const xml = new XMLHttpRequest();
        xml.open("GET", `${config.apiPrefix}/${config.db.name}/finished`);
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

const addCurrentTask = (data) => {
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

const addFinishedTask = (data) => {
    return new Promise((resolve, reject) => {
        const xml = new XMLHttpRequest();
        xml.open("POST", `${config.apiPrefix}/${config.db.name}/${config.db.finishedTasksName}`);
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

export {getCurrentTasks, getFinishedTasks, addCurrentTask, addFinishedTask};