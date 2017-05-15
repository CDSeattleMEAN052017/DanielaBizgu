var mongoose=require('mongoose')

var QuoteSchema = new mongoose.Schema({
                 name: { type: String, required: true, minlength: 4},
                 description:  { type: String, required: true, minlength:1},
                 url: {type: String, required:true, minlength:1}
               },
               {
                 timestamps: true
               });
mongoose.model('Friend', QuoteSchema); // We are setting this Schema in our Models as 'User'
var Friend = mongoose.model('Friend')
