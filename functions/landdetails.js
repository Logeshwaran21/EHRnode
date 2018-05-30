'use strict';
const user = require('../models/landdetails');
 exports.landdetails = (sellername,addresses,landsqft,landvalue) => 
 new Promise((resolve, reject) => {
     const landdetails=new user({
sellername:String,
addresses:String,
landsqft:Number,
landvalue:Number
     })
     console.log("landdetails Added sucessfully");


// router.post('/student', cors(), (req, res) => { 
// const rice = req.body.rice;
// console.log(rice);
// const wheat = req.body.wheat;
// console.log(wheat);
// // const phonenumber = parseInt(req.body.phonenumber);
// //console.log(phonenumber);

// })})

landdetails
       .save()
       
       .then(() => resolve({
           status: 201,
           message: 'land register sucessfully'
       }))
       console.log("chennai")
       .catch(err => {
console.log("delhi")
           if (err.code == 11000) {

               reject({
                   status: 409,
                   message: 'User Already Registered !'
               });

           } else {
            console.log("pune")
               reject({
                   status: 500,
                   message: 'Internal Server Error !'
               });
           }
       });
});