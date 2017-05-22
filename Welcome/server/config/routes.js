var users=require("./../controllers/users");
module.exports=function(app){

      //DISPLAY DASHBOARD
      app.get("/get_users", users.get_users)
      //ADD USER
      app.post("/create", users.create)
      //EDIT USER
      app.post("/edit_user/:id", users.edit_user)
      //DELETE USER
      app.post("/delete_user/:id", users.delete_user)
      //GET SPECIFIC USER FROM DB
      app.post("/get_one/:id", users.get_one)


}
