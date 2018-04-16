'use strict';

const user = require('../models/register');
// const user = require('../models/fetchdata');

exports.loginUser = (emailid, passwordid) =>

    new Promise((resolve, reject) => {

        console.log("Entering into login fun");
        console.log(emailid);

        user.find({
                "email": emailid ,
            
            })
            .then(users => {

                const dbpin = users[0].password;
                console.log(users[0].password)
                console.log(users[0]._id)
                console.log(dbpin + "   " + users[0].password)

                if (String( users[0].password) === String(dbpin)) {

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





