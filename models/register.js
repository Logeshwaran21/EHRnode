'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
console.log("vignesh")
const registerpageSchema = mongoose.Schema({

    doctorname:String,
        lastname:String,
        dob:String,
        experience:Number,
        designation:String,
        phonenumber:Number,
        homenumber:Number,
        hospitalname:String,
        qualification:String,
        address:String,
        licenseid:String,
        password:String,
        confirmpassword:String

     
});


mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/digitalId', { useMongoClient: true });

mongoose.connect('mongodb://ehr:chennai123@ds163530.mlab.com:63530/ehr', {
    useMongoClient: true
});



module.exports = mongoose.model('register', registerpageSchema);