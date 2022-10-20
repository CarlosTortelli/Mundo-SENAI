const express = require('express');
const routes = express.Router();

const nameController = require('./controllers/nameController'); 
const emailController = require('./controllers/emailController');
const ageController = require('./controllers/ageController');
const numberController = require('./controllers/numberController');

routes.post('/nome_visitante', nameController.create);

routes.post('/email_visitante', emailController.create);

routes.post('/telefone_visitante', numberController.create);

routes.post('/idade_visitante', ageController.create);

routes.get('/nome_visitante', nameController.index);

routes.get('/email_visitante', emailController.index);

routes.get('/telefone_visitante', numberController.index);

routes.get('/idade_visitante', ageController.index);

routes.put('/nome_visitante', nameController.put);

routes.put('/email_visitante', emailController.put);

routes.put('/telefone_visitante', numberController.put);

routes.put('/idade_visitante', ageController.put);

routes.delete('/nome_visitante', nameController.delete);

routes.delete('/email_visitante', emailController.delete);

routes.delete('/telefone_visitante', numberController.delete);

routes.delete('/idade_visitante', ageController.delete);

module.exports = routes;
