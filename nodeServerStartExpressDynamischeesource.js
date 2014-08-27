var express = require('express');

/**
 * Create express Services
 */
var app = express();
app.set('title', 'Node Example');
app.listen(1337);
console.log('system waiting at http://localhost:1337');


app.get("/:key", function(req, res) {

    var key = req.params.key;

    if (key === "foo")
    {
        res.send("bar !");
    }

    if (key === "muh")
    {
        res.send("oh a cow !");
    }

    res.send("Hallo :)");
});
