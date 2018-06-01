'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const registerpageSchema = mongoose.Schema({

    username: String,
   
    phonenumber : Number,
    dateofbirth : String,
    email : {
        type: String,
        unique: true
    },
    password: String,
    retypepassword: String,
    usertype:  String,

     
});


mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/digitalId', { useMongoClient: true });

mongoose.connect('mongodb://loginpage01:loginpage1@ds215709.mlab.com:15709/landregistry', {
    useMongoClient: true
});



module.exports = mongoose.model('register', registerpageSchema);