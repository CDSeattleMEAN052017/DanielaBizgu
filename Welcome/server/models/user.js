var mongoose=require('mongoose');

var UserSchema=new mongoose.Schema({
  firstName:{type: String},
  lastName:{type: String},
  birthday:{type: Date}
},{timestamps: true});

mongoose.model("User", UserSchema);
var User=mongoose.model("User");
