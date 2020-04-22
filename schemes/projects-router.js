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

router.get('/:id/tasks', (req, res) => {
    const { id } = req.params;

    Projects.findTasks(id)
    .then(tasks => {
        if (tasks.length) {
            res.status(201).json(tasks);
        } else {
            res.status(404).json({ message: 'Could not find tasks for given project' })
        }
    })
    .catch(err => res.status(500).json({message: 'failed to retrieve'}));
});

router.post('/', (req, res) => {
    const project = req.body;
    const { id } = req.query;

    Projects.add(id, project)
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