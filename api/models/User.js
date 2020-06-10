const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({ 
    name:{
        type: String,
        trim: true,
        required: true,
        minlength:3

  },
  email: {
      type: String,
      trim: true,
     

  },
  mobile:{
      type: Number,
      trim: true,
      required: true,
      

  } 
})

const Users = mongoose.model('Users', UserSchema)

module.exports = Users

