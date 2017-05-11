
module.exports = function Route(app){
	// root route to render the index.ejs view
	app.get('/', function(req, res) {
	 res.render("main");
	})
	// post route for adding a data from a survey
	app.post('/process', function(req, res) {
		context = {
			name: req.body.name,
			location: req.body.location,
			language: req.body.language,
			comment: req.body.comment
		};
	 	res.render("result",{context});
	})
};
