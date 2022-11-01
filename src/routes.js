const express = require('express');
const routes = express.Router();

const controller = require('./database/database.js'); 

routes.post('/post', function(req, res){
    controller.create
  })

routes.get('/get', controller.find);

module.exports = routes;
