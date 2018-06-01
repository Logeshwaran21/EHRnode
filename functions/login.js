'use strict';
const user = require('../models/login');
 exports.login = (UserName,email,password) => 
 
 new Promise((resolve, reject) => {
     
    console.log("Entering into login ");

        console.log(email);

     user.find({
         "email": email ,
         
        
          })
          console.log("vijay")
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
   });