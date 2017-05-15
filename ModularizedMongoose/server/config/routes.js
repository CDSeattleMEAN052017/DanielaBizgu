var friends=require("../controllers/friends.js");
module.exports=function(app){

      //DISPLAY DASHBOARD
      app.get("/", function(req, res){
        friends.find(req, res);
      })

      //DISPLAY NEW PAGE
      app.get("/new", function(req, res){
        res.render("new")
      })

      //ADD NEW
      app.post("/friends", function(req, res){
        firends.create(req, res);
      })

      //SHOW 1
      app.get("/show/:id", function(req, res){
        friends.findOne(req, res);
      })

      //DISPLAY EDIT PAGE
      app.get("/edit/:id", function(req,res){
        friends.findEdit(req,res);
      })

      //EDIT
      app.post("/friends/:id",function(req, res){
        friends.edit(req, res);
      })
       //DELETE
      app.post("/delete/:id", function(req, res){
        friends.remove(req, res);
      })


}
