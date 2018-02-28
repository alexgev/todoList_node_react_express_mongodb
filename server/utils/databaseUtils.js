import {MongoClient} from 'mongodb';
import {ObjectID} from 'mongodb';
import config from '../../etc/config.json';

var db = {};

export function setUpConnection(done) {

    MongoClient.connect(`mongodb://${config.db.host}:${config.db.port}`, (err, database) => {
        if (err) done(err);
        db = database.db(config.db.name);
        done();
    });
}

export function findAllCurrent() {
    return db.collection(config.db.name).find().toArray();
}

export function findAllFinished() {
    return db.collection(config.db.finishedTasksName).find().toArray();
}

export function addTask(task) {
    return db.collection(config.db.name).insert(task);
}

export function addFinishedTask(task) {
    return db.collection(config.db.finishedTasksName).insert(task);
}

export function removeTask(id) {
    return db.collection(config.db.name).deleteOne({_id: ObjectID(id)});
}

export function completeTask(id, finishedTime) {
    return db.collection(config.db.name).update({ _id: ObjectID(id) }, {$set: finishedTime}).then(
        result => db.collection(config.db.name).findOne({ _id: ObjectID(id) }),
        err => console.log(err)
    ).then(
        result => db.collection(config.db.finishedTasksName).insert(result),
        err => console.log(err)
    ).then(
        result => db.collection(config.db.name).deleteOne({ _id: ObjectID(id) }),
        err => console.log(err)
    ).then(
        result => db.collection(config.db.finishedTasksName).findOne({ _id: ObjectID(id) }),
        err => console.log(err)
    )
    
    // db.collection(config.db.name).findOne({ _id: ObjectID(id) }).then(
    //     result => db.collection(config.db.finishedTasksName).insert(result)
    // ).then(
    //     db.collection(config.db.name).deleteOne({ _id: ObjectID(id) })
    // ) 
}

export function getDb() {
    return db;
}
