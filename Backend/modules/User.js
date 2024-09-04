const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
     name:{
        type:String,
        required:true
     },
     email:{
        type:String,
        required:true,
        unique:true,
     },
     password:{
        type:String,
        required:true
     },
     date:{
        type:Date,
        default:Date.now
     }
  });
  const User=mongoose.model('user',UserSchema);
//   the above line converts schema into module
//   User.createIndexes();//this is used to ensure that every email is unique duplicates are not allowed
// for better logic or better app we write the logic of unique id in Auth.js 
  module.exports=User; 