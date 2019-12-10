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

module.exports = router;