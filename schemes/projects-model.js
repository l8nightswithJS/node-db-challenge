const db = require('../data/dbConfig.js');

function find() {
    return db('projects')
}

function findResource() {
    return db('resource')
}

function findTasks(id) {
    return db('projects')
    .select('projects.project_name','tasks.task_notes','tasks.task_description', 'tasks.task_completed')
    .join('tasks', 'tasks.project_id', 'projects.id')
    .where({project_id: id})
    .orderBy('tasks.id')
}

function add(projectData) {
    return db('projects').insert(projectData);
}

function addResource(resourceData) {
    return db('resource').insert(resourceData);
}

function addTasks(taskData) {
    return db('tasks')
    .insert(taskData)
    
}

module.exports = {
    find,
    findResource,
    findTasks,
    add,
    addResource,
    addTasks
};