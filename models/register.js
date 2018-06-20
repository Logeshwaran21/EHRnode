'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
console.log("vignesh")
const registerpageSchema = mongoose.Schema({

        doctorname:String,
        lastname:String,
        dob:String,
        experience:String,
        designation:String,
        phonenumber:Number,
        email:String,
        hospitalname:String,
        qualification:String,
        address:String,
        licenseid:String,
        password:Number,
        confirmpassword:Number

     
});


mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/digitalId', { useMongoClient: true });

mongoose.connect('mongodb://EHRTeam:EHRTeam1@ds139920.mlab.com:39920/ehr', {
    useMongoClient: true
});



module.exports = mongoose.model('newUser', registerpageSchema);