var Modelo = require('../models/produtomodel');
var get = function (req,res) {        
    Modelo.find(function (err, Modelo) {
            if (err) {
                res.status(500);
                res.send("Erro interno do servidor");
            }
            else {
                res.status(200);
                res.send(Modelo);
            }
        });
     };

     var add = function (req, res) {
        var produto = new Modelo(req.body);
        produto.save(function (err) {
            if (err) {
                res.status(500);
                res.send('Erro : falha ao incluir produto...');
            }
            else {
                res.status(201);
                res.send(produto);
            }
        })
    };
    var getById = function (req, res) {
        Modelo.findById(req.params.id, function (err, produto) {
            if (err) {
                res.status(404);
                res.send("Produto não encontrado...");
            }
            else {
                res.status(200);
                res.send(produto);
            }
        })
    };
module.exports =  {
  add: add,
  get: get,
  getById: getById
};