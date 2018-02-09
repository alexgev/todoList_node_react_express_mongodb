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

export function findAll() {
    return db.collection(config.db.name).find().toArray();
}

export function addTask(task) {
    return db.collection(config.db.name).insert(task);
}

export function removeTask(id) {
    return db.collection(config.db.name).deleteOne({_id: ObjectID(id)});
}

export function getDb() {
    return db;
}
