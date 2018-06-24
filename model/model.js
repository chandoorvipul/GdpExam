var mongoose = require('mongoose');
var gdpSchema = mongoose.Schema({
    Make : String,
    Model : String,
    Year:{
        type: String,
        required: true
    } ,
    Type : String,
    features : [String],
    PurchaseDate : Date
   });
   module.exports = mongoose.model('Consumer', gdpSchema);