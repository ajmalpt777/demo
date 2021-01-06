const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictak.vcicb.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');


const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    name:String,
    genre:String,
    book1:String,
    book2:String,
    book3:String,
    image:String
});

var Authordata = mongoose.model('authordata',AuthorSchema);

module.exports = Authordata;