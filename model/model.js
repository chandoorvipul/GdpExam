var mongoose = require('mongoose');
var gdpSchema = mongoose.Schema({
    Make : String,
    Model : String,
    Year : String,
    type : String,
    Features : String,
    PurchaseDate : Date
   });
   module.exports = mongoose.model('Consumer', gdpSchema);