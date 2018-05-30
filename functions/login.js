'use strict';
const user = require('../models/login');
 exports.login = (email,password) => 
 
 new Promise((resolve, reject) => {
    
    const login=new user({
email:email,
password:password
     })
     
console.log("arjun")
user.find({
    "email": email ,

})
.then(users => {

    const dbpin = users[0].password;
    console.log(users[0].password)
    console.log(users[0]._id)
    console.log(dbpin + "   " + users[0].password)

    if (String(password) === String(dbpin)) {

        resolve({
            status: 200,
            users: users[0]
        });

    } else {

        reject({
            status: 401,
            message: 'Invalid Credentials !'
        });
    }
})




// router.post('/student', cors(), (req, res) => { 
// const rice = req.body.rice;
// console.log(rice);
// const wheat = req.body.wheat;
// console.log(wheat);
// // const phonenumber = parseInt(req.body.phonenumber);
// //console.log(phonenumber);

// })})

login
       .save()
       .then(() => resolve({
           status: 201,
           message: 'login sucessfully'
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