const express = require("express");
var app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({ extended: true }));


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
    res.redirect('/');


});

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/home.html")
});

app.get("/views/home", function(req, res) {
    res.sendFile(__dirname + "/views/index")
});





app.listen(4000, function() {
    console.log("Server is running");
});