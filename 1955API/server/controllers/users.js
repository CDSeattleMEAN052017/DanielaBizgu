var mongoose= require("mongoose");
var API=mongoose.model("API");

module.exports={
  show: function(req, res){
    API.find({}, function(err, person){
      if(err){console.log(err);}
      res.json(person);
    })
  },
  create: function(req, res){
    var person=new API({name: req.params.name});
    console.log(person);
    person.save(function(err){
      console.log("Successfuly added to database");
      res.redirect("/")
    })
  },
  remove: function(req, res){
    API.remove({name: req.params.name}, function (err) {
      res.redirect("/")
    })
  },
  showOne: function(req, res){
    API.findOne({name: req.params.name}, function(err, person){
      if(err){console.log("You got an error");}
      res.json(person);
    })
  },

}
