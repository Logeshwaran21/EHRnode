'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
console.log("vignesh")
const registerpageSchema = mongoose.Schema({

        patientname:String,
        plastname:String,
        pdob:String,
        pphonenumber:Number,
        pemail:String,
        adhar:Number,
        occupation:String,
        bgroup:String,
        paddress:String,
        ppassword:Number,
        cppassword:Number

     
});


mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/digitalId', { useMongoClient: true });

mongoose.connect('mongodb://EHRTeam:EHRTeam1@ds139920.mlab.com:39920/ehr', {
    useMongoClient: true
});



module.exports = mongoose.model('newUser1', registerpageSchema);