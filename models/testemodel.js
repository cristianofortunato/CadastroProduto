var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Model = new Schema({
      nome : {type: String},
      ativo : {type: Boolean, default: true}
});
module.exports = mongoose.model("DadosCadastrais",Model);