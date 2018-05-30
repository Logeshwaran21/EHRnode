'use strict';
const user = require('../models/register');
 exports.register = (firstname,lastname,dateofbirth,phonenumber,email,password,retypepassword,usertype) => 
 
 new Promise((resolve, reject) => {
    
    const register=new user({
firstname:firstname,
lastname:lastname,
dateofbirth:dateofbirth,
phonenumber:phonenumber,
email:email,
password:password,
retypepassword:retypepassword,
usertype:usertype
     })
     
console.log("arjun")

// router.post('/student', cors(), (req, res) => { 
// const rice = req.body.rice;
// console.log(rice);
// const wheat = req.body.wheat;
// console.log(wheat);
// // const phonenumber = parseInt(req.body.phonenumber);
// //console.log(phonenumber);

// })})

register
       .save()
       .then(() => resolve({
           status: 201,
           message: 'Registered sucessfully'
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