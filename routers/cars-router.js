const express = require('express');
const knex = require('knex');
const db = require('../data/dbConfig');

const router = express.Router();

router.get('/', (req,res) => {
    db('cars')
    .then(cars => {
        res.status(200).json(cars)
    })
    .catch(err => {
        res.status(500).json({ message: "error with request..."})
    })
});

router.post('/', (req,res) => {
    const carsData = req.body;

    db('cars').insert(carsData)
    .then(ids => {
        db('cars').where({ id: ids[0] })
        .then(newCar => {
            res.status(201).json(newCar);
        })
    })
    .catch(err => {
        res.status(500).json({ message: 'Error with request...'})
    })
})

module.exports = router;