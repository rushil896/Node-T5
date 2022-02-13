var mongoose = require('mongoose');

var schema = mongoose.Schema({
    name:String,
    email:String
})

module.exports = mongoose.model("AdminInfo",schema)