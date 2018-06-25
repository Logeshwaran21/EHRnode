'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const loginpageSchema = mongoose.Schema({

    
 email:String,
 password:Number,
 category:String
});


mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/digitalId', { useMongoClient: true });

mongoose.connect('mongodb://EHRTeam:EHRTeam1@ds139920.mlab.com:39920/ehr', {
    useMongoClient: true
});



module.exports = mongoose.model('user1',loginpageSchema);