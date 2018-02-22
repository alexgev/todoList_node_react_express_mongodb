const getTasks = (url) => {
    return new Promise((resolve, reject) => {
        const xml = new XMLHttpRequest();
        xml.open("GET", url);
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

const addTask = (url, data) => {
    return new Promise((resolve, reject) => {
        const xml = new XMLHttpRequest();
        xml.open("POST", url);
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