'use strict';
const user = require('../models/register');
 exports.registerUser = (doctorname,lastname,dob,experience,designation, phonenumber,homenumber,hospitalname,qualification,address,licenseid,password,confirmpassword) => new Promise((resolve, reject) => {
console.log("arjun")
    const newUser = new user({

        doctorname:doctorname,
        lastname:lastname,
        dob:dob,
        experience:experience,
        designation:designation,
        phonenumber:phonenumber,
        homenumber:homenumber,
        hospitalname:hospitalname,
        qualification:qualification,
        address:address,
        licenseid:licenseid,
        password:password,
        confirmpassword:confirmpassword
       
    });
    newUser
        .save()
        .then(() => resolve({
            status: 201,
            message: 'Please verify your emailid and phone no'
        }))
        .catch(err => {

            if (err.code == 11000) {

                reject({
                    status: 409,
                    message: 'User Already Registered !'
                });

            } else {

                reject({
                    status: 500,
                    message: 'Internal Server Error !'
                });
            }
        });
});

 
 
 
