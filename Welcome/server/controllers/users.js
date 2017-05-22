var mongoose=require("mongoose");
var User=mongoose.model("User");

module.exports={
  //GET ALL USERS FROM DB
  get_users: (req, res)=>{
    User.find({})
        .then (users=>{res.json(users)})
        .catch(err=>{
          console.log("User get error", err);
          res.status(500),json(err)
        })
  },
  //ADD ONE USER TO DB
  create: (req, res)=>{
    let new_user=new User(req.body)
    new_user.save()
            .then(()=>{res.json(true)})
            .catch(err=>{
              console.log("Bokk add to database error!!", err);
              res.status(500).json(err);
            })
  },
  //EDIT THE USER IN THE DB
  edit_user: (req, res)=>{
    User.update({_id: req.params.id}, (req.body))
        .then(users=>{res.json(true)})
        .catch(err=>{
          console.log("Error whe updating:", err);
          res.status(500).json(err);
        })
  },

  //DELETE USER FROM DB
  delete_user: (req, res)=>{
    User.remove({_id: req.params.id})
        .then(users=>{res.json(true)})
        .catch(err=>{
          console.log("Error when deleting:", err);
          res.status(500).json(err);
        })
  },

  //GET ONE USER FROM DB
  get_one: (req, res)=>{
    User.findOne({_id: req.params.id})
        .then(users=>{res.json(users)})
        .catch(err=>{
          console.log("Error when getting one user:", err);
          res.status(500).json(err);
        })
  }





}
