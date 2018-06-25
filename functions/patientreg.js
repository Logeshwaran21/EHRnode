'use strict';
const user = require('../models/patient');
 exports.patientreg = (patientname,plastname,pdob,pphonenumber,pemail,occupation,bgroup,adhar,paddress,ppassword,cppassword) =>
  new Promise((resolve, reject) => {
console.log("arjun")
const newUser1 = new user({

    patientname: patientname,
    plastname:plastname,
    pdob:pdob,
    pphonenumber:pphonenumber,
    pemail:pemail,
    occupation:occupation,
    bgroup:bgroup,
    adhar:adhar,
    paddress:paddress,
    ppassword:ppassword,
    cppassword:cppassword
       
    });
    newUser1
        .save()
        .then(() => resolve({
            
            status: 201,
            message: 'Please verify your emailid and phone no'
        }))
        .catch(err => {

            if (err.code == 11000) {
                console.log("entereing");
                reject({
                    status: 409,
                    message: 'User Already Registered !'
                });

            } else {
                console.log("entereing elsehu");
                reject({
                    status: 500,
                    message: 'Internal Server Error !'
                });
            }
        });
});
 
 
