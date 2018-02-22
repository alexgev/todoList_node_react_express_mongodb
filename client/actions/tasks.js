import config from '../../etc/config.json';

const getTasks = () => {
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

const addTask = (data) => {
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

export {getTasks, addTask};