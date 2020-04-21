const express = require('express');

const Projects = require('./projects-model.js');
const db = require('../data/dbConfig.js')

const router = express.Router();

router.get('/', (req, res) => {
    Projects.find()
    .then(projects => {
        res.json(projects);
    })
    .catch(err => res.status(500).json({message: 'failed to retrieve'}));
});

router.get('/resource', (req, res) => {
    Projects.findResource()
    .then(resource => {
        res.json(resource);
    })
    .catch(err => res.status(500).json({message: 'failed to retrieve'}));
});

router.get('/tasks', (req, res) => {
    Projects.findTasks()
    .then(tasks=> {
        res.json(tasks);
    })
    .catch(err => res.status(500).json({message: 'failed to retrieve'}));
});

router.post('/', (req, res) => {
    project = req.body;

    Projects.add(project)
    .then(newProject => {
        res.status(201).json(newProject)
    })
    .catch(err => {
        res.status(500).json({message: 'failed to add new project'})
    });
})

router.post('/resource', (req, res) => {
    resourceData = req.body;

    Projects.addResource(resourceData)
    .then(newResource => {
        res.status(201).json(newResource)
    })
    .catch(err => res.status(500).json({message: 'failed to add new resource'}));
})

router.post('/tasks', (req, res) => {
    tasksData = req.body;

    Projects.addTasks(tasksData)
    .then(newTask => {
        res.status(201).json({ created: `created with id:${newTask}` })
    })
    .catch(err => res.status(500).json({message: 'failed to add new task'}));
})

module.exports = router;