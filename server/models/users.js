var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
  name:  {
      type:String,
      required: [true, 'harus diisi namanya']
    },
  email: {
      type: String,
      unique: true,
      required: [true, 'harus isi email']
  },
  password: {
      type: String,
      required: [true, 'password harus diisi']
  }
},{
    timestamps: true
});

var User = mongoose.model('User', userSchema);
module.exports = User