var express = require('express');
var produtosRouter = express.Router();

var produtosController = require('../controllers/produtoscontroller');
produtosRouter.route('')
    .get(produtosController.get)
    .post(produtosController.add);

    produtosRouter.route('/:id')    
    .get(produtosController.getById) 

module.exports = produtosRouter; 