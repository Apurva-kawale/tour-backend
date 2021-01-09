const express = require("express");
var app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var routes = require('./routes/welcome');
var login = require('./routes/login');
var home = require('./routes/home');
var search = require('./routes/search');
var gallery = require('./routes/gallery');
var about = require('./routes/about');
var searchInfo = require('./routes/searchInfo');
const path = require('path');
var http = require('http');
var server = http.createServer(app);


app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);
app.use('/login', login);
app.use('/home', home);
app.use('/search', search);
app.use('/about', about);
app.use('/gallery', gallery);
app.use('/searchInfo', searchInfo);
app.use(express.static('public'));
app.use('/images', express.static(__dirname + '/images'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


mongoose.connect("mongodb+srv://apurva1:Mongo@123@cluster0.qo1kt.mongodb.net/notesDB?retryWrites=true&w=majority", { useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log("DB connected");
    } else {
        console.log("Error in connection" + err);
    }
});

const userSchema = {
    firstName: String,
    lastName: String,
    email: String
}

const userDetails = mongoose.model("userDetails", userSchema);


app.post("/", function(req, res) {
    let newNote = userDetails({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    });
    newNote.save();
    res.redirect('/home');


});

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/login")
});







app.listen(4000, function() {
    console.log("Server is running");
});

module.exports = app;