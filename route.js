'use strict';

var response = require('response');
var request = require('request');

var Promises = require('promise');

var mongoose = require('mongoose');

 var login = require("./functions/login")
// var landdetails = require("./functions/landdetails")
var registerUser= require('./functions/registerUser')

var path = require('path');
var cors = require('cors');
var cloudinary = require('cloudinary');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
const nodemailer = require('nodemailer');
var express = require('express');
var router = express.Router();



module.exports = router => {

  router.post('/registerFront', cors(), (req, res) => { 
      console.log("enter your register")

    const doctorname = req.body.doctorname;
    console.log(doctorname);
    const lastname = req.body.lastname;
    console.log(lastname);
    const dob = req.body.dob;
    console.log(dob);
    const experience = req.body.experience;
    console.log(experience);
    const designation = req.body.designation;
    console.log(designation);
    const phonenumber = parseInt(req.body.phonenumber);
    console.log(phonenumber);
    const email = req.body.email;
    console.log(email);
    const hospitalname = req.body.hospitalname;
    console.log(hospitalname);
    const qualification = req.body.qualification;
    console.log(qualification);
    const address = req.body.address;
    console.log(address);
    const licenseid = req.body.licenseid;
    console.log(licenseid);
    const password = req.body.password;
    console.log(password);
    const confirmpassword = req.body.confirmpassword;
    console.log(confirmpassword);
    
 

    if (!doctorname || !lastname|| !dob || !experience || !designation || !phonenumber || !email || !hospitalname|| !qualification|| !address|| !licenseid|| !password|| !confirmpassword ) {

        res
            .status(400)
            .json({
                message: 'Invalid Request !'
            });

    } else {
console.log("logesh")
        registerUser
            .registerUser(doctorname,lastname,dob,experience,designation, phonenumber,email,hospitalname,qualification,address,licenseid,password,confirmpassword)
            .then(result => {


                    res.send({
                        "message": "user has been registered successfully",
                        "status": true,


                    });


                })
                .catch(err => res.status(err.status).json({
                    message: err.message
                }).json({
                    status: err.status
                }));
        }
    });


 router.post('/login',cors(),(req,res)=> {
   
     var email =req.body.email;
     console.log("email:",email);
     var password=req.body.password;
     console.log("password",password);
     var category=req.body.category;
     console.log("category",category);

     login
      .login(email,password,category)
      .then(result => {   
         console.log("result ===>>>",result)
         console.log("hello")
         res.send({
             "message": "Login sucessfully",
             "status": true,
             
         });

     })
     .catch(err => res.status(err.status).json({
         message: err.message
     }).json({
         status: err.status
     }));
 }
 )}


