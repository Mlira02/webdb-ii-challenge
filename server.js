const express = require('express');
const morgan = require('morgan');
const carsRouter = require('./routers/cars-router');
const server = express();


server.use(express.json());
server.use(morgan('dev'));
server.use('/cars', carsRouter)

module.exports = server;