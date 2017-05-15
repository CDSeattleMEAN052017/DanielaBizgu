var mongoose=require("mongoose");
var Friend=mongoose.model("Friend");

module.exports={
  find: function(req, res){
    Friend.find().sort("-createdAt").find( function (err, result) {
      if(err){
        res.render("dashboard", {errors: "You have errors", errors: friend.errors})
      }else{
        res.render("dashboard", {context: result})
      }
    })
  },
  create: function(req, res){
    var friend=new Friend({name:req.body.name, description: req.body.description, url: req.body.url})
    friend.save(function(err){
      if(err){
        res.render("new", {errors: "You have errors", errors: friend.errors})
      }else {
        res.redirect("/")
      }
    })
  },
  findOne:function(req, res){
    Friend.findOne({_id: req.params.id}, function(err, result){
      if(err){
        res.redirect("/")
      }else{
        res.render("show", {context: result})
      }
    })
  },
  findEdit: function(req, res){
    Friend.findOne({_id: req.params.id}, function(err, result){
      if(err){
        res.redirect("/")
      }else{
        res.render("edit", {context: result})
      }
    })
  },
  edit: function(req,res){
    Friend.update({_id: req.params.id}, req.body, function(err, result){
      if(err){
        console.log("Got an error");
      }else{
        res.redirect("/")
      }
    })
  },
  remove:function(req, res){
    Friend.remove({_id: req.params.id}, function(err, doc){
      if(err){
        console.log("Got some errors!");
        message.type="Something went wrong"
        res.redirect("/")
      }else{
        res.redirect("/")
      }
    })
  }



}
