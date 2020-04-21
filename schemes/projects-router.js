const express = require('express');

const Projects = require('./projects-model.js');

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

router.post('/', (req, res) => {
    projectData = req.body;

    Projects.add(projectData)
    .then(newId => {
        res.status(201).json({ created: `created with id:${newId}` })
    })
    .catch(err => res.status(500).json({message: 'failed to add new project'}));
})

// router.post('/resource', (req, res) => {
//     resourceData = req.body;

//     Projects.addResource(resourceData)
//     .then(newId => {
//         res.status(200).json({ created: `created with id:${newId}` })
//     })
//     .catch(err => res.status(500).json({message: 'failed to add new resource'}));
// })

// router.post('/tasks', (req, res) => {
//     tasksData = req.body;

//     Projects.addTasks(tasksData)
//     .then(newId => {
//         res.status(201).json({ created: newId[0] })
//     })
//     .catch(err => res.status(500).json({message: 'failed to add new task'}));
// })

module.exports = router;