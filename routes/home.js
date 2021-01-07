var express = require("express");

var router = express.Router();

router.get("/", function(req, res) {
    res.render('home', {
        home: 'HOME',
        search: 'SEARCH',
        about: 'ABOUT',
        gallery: 'GALLERY',
        register: 'REGISTER'
    });
});

module.exports = router;