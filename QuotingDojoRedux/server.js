



// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
//Requiring mangoose
var mongoose=require('mongoose')
//Require momment
var moment=require('moment')


// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/quoting_dojo');
var QuoteSchema = new mongoose.Schema({
 name: { type: String, required: true, minlength: 4},
 quote:  { type: String, required: true, minlength:1},
 likes: {type: Number},
 created_at: {type: Date}
})
mongoose.model('Quote', QuoteSchema); // We are setting this Schema in our Models as 'User'
var Quote = mongoose.model('Quote')


// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');


var route = require('./routes/routes.js')(app);

	// post route for adding a data from a survey
	app.post('/quotes', function(req, res) {
		console.log("***Data", req.body);
		var quote=new Quote({name: req.body.name, quote: req.body.quote, likes: 0, created_at: Date.now() });
		quote.save(function(err){
			if(err){
				console.log("Got an error when adding to database");
				res.render("index", {title: "You have error", errors: quote.errors})
			}else {
				console.log("Successfully addes a entry to db!");
				res.redirect('/quotes')
			}
		})
	})

  app.get('/quotes', function(req, res){
    // Quote.find({},function(err, result){
    //   if(err){console.log(err);}
    //
    //   res.render("quotes", { context: result})
    // })

    //Sorted by likes
    Quote.find().sort("-likes").find(function (err, result) {
      if(err){console.log(err);}
      res.render("quotes", { context: result})
    })

  })

  app.post('/addLike/:id', function(req, res){
    var id=req.params.id
    Quote.update({_id:id},{$inc: {likes: 1}},  function(err){
      if(err){
        console.log(err);
        res.redirect("/quotes")
      }else {
        res.redirect("/quotes")
      }
    })
  })

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
