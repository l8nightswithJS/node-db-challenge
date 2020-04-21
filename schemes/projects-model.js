const db = require('../data/dbConfig.js');

function find() {
    return db('projects')
}

function findResource() {
    return db('resource')
}

function findTasks() {
    return db('tasks')
}

function add(projectData) {
    return db('projects').insert(projectData);
}

function addResource(resourceData) {
    return db('resource').insert(resourceData);
}

function addTasks(taskData) {
    return db('tasks').insert(taskData);
}

module.exports = {
    find,
    findResource,
    findTasks,
    add,
    addResource,
    addTasks
};