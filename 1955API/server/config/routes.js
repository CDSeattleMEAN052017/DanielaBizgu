var project=require("../controllers/users.js")
module.exports= function(app){
  app.get("/", function(req, res){
    project.show(req,res)
  }),
  app.get("/new/:name", function(req, res){
    project.create(req, res);
  }),
  app.get("/remove/:name", function (req, res){
    project.remove(req, res);
  }),
  app.get("/:name", function (req, res) {
    project.showOne(req, res);
  }),
  //OPTIONAL
  app.get("/optional/main", function(req, res){
    res.render("main")
  })
}
