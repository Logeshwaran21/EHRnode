'use strict';



const login = require('./functions/login');

var cors = require('cors');
var mongoose = require('mongoose');
 var routes = require('routes'),

var Promise = require('promise');
var path = require('path');

module.exports = router => {

    
router.post('/login', cors(), (req, res) => {
    console.log("entering login function in functions ");
    const emailid = req.body.email;
    console.log(emailid);
    const passwordid = req.body.password;
    console.log(passwordid);
   
   
    login
        .loginUser(emailid, passwordid)
        .then(result => {   
            console.log("result ===>>>",result.users.usertype)


            res.send({
                "message": "Login Successful",
                "status": true,
                "usertype":result.users.usertype
            });

        })
        .catch(err => res.status(err.status).json({
            message: err.message
        }).json({
            status: err.status
        }));

});
}
router.post('/login', cors(), (req, res) => {
    console.log("entering login function in functions ");
    const emailid = req.body.email;
    console.log(emailid);
    const passwordid = req.body.password;
    console.log(passwordid);
   
   
    login
        .loginUser(emailid, passwordid)
        .then(result => {   
            console.log("result ===>>>",result.users.usertype)


            res.send({
                "message": "Login Successful",
                "status": true,
                "usertype":result.users.usertype
            });

        })
        .catch(err => res.status(err.status).json({
            message: err.message
        }).json({
            status: err.status
        }));

});
// router.post('/login', cors(), (req, res) => {
//     console.log("entering login function in functions ");
//     const emailid = req.body.email;
//     console.log(emailid);
//     const passwordid = req.body.password;
//     console.log(passwordid);
   
   
//     login
//         .loginUser(emailid, passwordid)
//         .then(result => {   
//             console.log("result ===>>>",result.users.usertype)


//             res.send({
//                 "message": "Login Successful",
//                 "status": true,
//                 "usertype":result.users.usertype
//             });

//         })
//         .catch(err => res.status(err.status).json({
//             message: err.message
//         }).json({
//             status: err.status
//         }));

// });
// router.post('/central', cors(), (req, res) => {
//     console.log("Update sucessfully ");
//     const rice = req.body.rice;
//     console.log(rice);
//     const wheat = req.body.wheat;
//     console.log(wheat);
//    const kerosene = req.body.kerosene;
//     console.log(kerosene);

//     login
//         .loginUser(emailid, passwordid)
//         .then(result => {   
//             console.log("result ===>>>",result.users.usertype)


//             res.send({
//                 "message": "Login Successful",
//                 "status": true,
//                 "usertype":result.users.usertype
//             });

//         })
//         .catch(err => res.status(err.status).json({
//             message: err.message
//         }).json({
//             status: err.status
//         }));

// });

