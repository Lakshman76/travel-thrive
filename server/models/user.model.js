const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    firstName: {
      type:String,
      required:[true, "User name is required"],
      minLength:[5, "Name must be atleast 5 character"],
      maxLength:[30, "Name must be less than 30 character"],
      trim:true
    },
    lastName: {
       type:String,
        required:[true, "User name is required"],
        minLength:[5, "Name must be atleast 5 character"],
        maxLength:[30, "Name must be less than 30 character"],
        trim:true
    },
    email: {
      type:String,
        required:[true, "Email is required"],
        lowercase:true,
        unique:true
    },
    password: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      default:""
    }
  });

const userModel = mongoose.model('User', UserSchema);
module.exports = userModel;