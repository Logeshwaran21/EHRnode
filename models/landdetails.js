
'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({

sellername:String,
addresses:String,
landsqft:Number,
landvalue:Number,

     
});


mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/digitalId', { useMongoClient: true });

mongoose.connect('mongodb://Arjunan:Arjunan24@ds215709.mlab.com:15709/landregistry',
// const db ="mongodb://landregistry:landregistry.mlab.com:39648/videoplayer"
 {
    useMongoClient: true
});



module.exports = mongoose.model('user', userSchema);