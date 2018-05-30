'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const loginpageSchema = mongoose.Schema({
    
 email:String,
 password:Number
});


mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/digitalId', { useMongoClient: true });

mongoose.connect('mongodb://login:login@ds231360.mlab.com:31360/login', {
    useMongoClient: true
});



module.exports = mongoose.model('user',loginpageSchema);