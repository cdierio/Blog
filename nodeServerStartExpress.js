var express = require('express');
var fs = require('fs');

/**
 * Create express Services
 */
var app = express();
app.set('title', 'Node Example');
app.listen(1337);
console.log('system waiting at http://localhost:1337');


app.get("/", function(req, res) {

    res.send("Hallo World !");

});
