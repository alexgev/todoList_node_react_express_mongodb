import express from 'express';
import bodyParser from 'body-parser';
import {serverPort} from '../etc/config.json';
import * as db from './utils/databaseUtils';
import { dirname } from 'path';
import path from "path";

import cors from 'cors';


const app = express();
app.use(bodyParser.json());
app.use(cors());
// app.use(bodyParser.urlencoded({extended: true}));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../index.html'));
// })

// app.post('/', (req, res) => {
//     console.log(req.body);
//     res.send(req.body);
// })

app.get('/tasks', (req, res) => {
    db.findAllCurrent().then(
        result => res.send(result),
        err => res.send(err)
    );
})

app.get('/tasks/finished', (req, res) => {
    db.findAllFinished().then(
        result => res.send(result),
        err => res.send(err)
    );
})

app.post('/tasks', (req, res) => {
    db.addTask(req.body).then(
        result => res.send(result),
        err => res.send(err)
    );
})

app.post('/tasks/finished', (req, res) => {
    db.addFinishedTask(req.body).then(
        result => res.send(result),
        err => res.send(err)
    )
})

app.delete('/tasks/:id', (req, res) => {
    db.removeTask(req.params.id).then(
        result => res.send(result),
        err => res.send(err)
    );
})

db.setUpConnection((err) => {
    if (err) console.log(err);

    app.listen(serverPort, () => {
        console.log(`server is listening on port ${serverPort}`)
    })
})

