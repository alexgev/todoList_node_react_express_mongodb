import express from 'express';
import bodyParser from 'body-parser';
import {serverPort, db as dbConfig} from '../etc/config.json';
import * as db from './utils/databaseUtils';
import { dirname } from 'path';
import path from "path";

import cors from 'cors';


const app = express();
app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(cors());


app.get('/curtasks', (req, res) => {
    db.findAllCurrent().then(
        result => res.send(result),
        err => res.send(err)
    );
})

app.get('/curtasks/:id', (req, res) => {
    db.findOneCurrent(req.params.id).then(
        result => res.send(result),
        err => res.send(err)
    )
})

app.get(`/fintasks`, (req, res) => {
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

app.post(`/tasks/${dbConfig.finishedURL}`, (req, res) => {
    db.addFinishedTask(req.body).then(
        result => res.send(result),
        err => res.send(err)
    )
})

app.put('/tasks/:id', (req, res) => {
    db.completeTask(req.params.id, req.body).then(
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

