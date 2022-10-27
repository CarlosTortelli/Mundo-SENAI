const express = require('express');
const routes = express.Router();

const controller = require('./controllers/controller.js'); 

routes.post('/cadastrar', controller.create);

routes.get('/lista', controller.find);

routes.get('/add', controller.get);

module.exports = routes;
