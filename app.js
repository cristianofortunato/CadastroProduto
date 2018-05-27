//var express = require('express');
//var mongoose = require('mongoose');
//var app = express();

const express = require('express'),
      mongoose = require('mongoose');
      app = express(),
      bodyParser = require('body-parser');

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

var produtosrouter = require('./routes/produtosrouter');
var url = 'mongodb://cristianofortunato:1234567890@ds235860.mlab.com:35860/vendasdb'
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
  console.log('Conectado ao banco de dados produtosdb MongoDB.')
});
mongoose.connect(url);
app.listen(5000, function () {
    console.log('Servidor escutando na porta 5000');
});


app.use('/produtos',produtosrouter); 