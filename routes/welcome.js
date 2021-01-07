var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
    res.render('welcome', {
        title: 'Welcome'
    });
});

module.exports = router;