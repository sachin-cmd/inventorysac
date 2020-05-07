const mongoose= require("mongoose");
const Schema = mongoose.Schema

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },

  lastname: {
    type: String,
    required: true,
  },
  department:{
    type:String,
    required:true,
  },

  email: {
    type: String,
    unique: true,
    required: true,
    dropDups: true,
  },


  password: {
    type: String,
    required: true,
  },

  verified : {
    type: Boolean,
    required: true
  }


},{timestamps:true});

module.exports = mongoose.model("User", userSchema);
