var express = require('express');

/**
 * Create express Services
 */
var app = express();
app.set('title', 'Node Example');
app.listen(1337);
console.log('system waiting at http://localhost:1337');

app.get("/test/:key", function(req, res) {

    var page = req.params.key;

    var htmlpagefromfilesystem = fs.readFileSync(page, "utf8");

    res.send(htmlpagefromfilesystem);
});