/**
 * Required node Packages
 * @type type
 */
var http = require('http');
var express = require('express');
var mustache = require('mustache');
var filesystem = require('fs');

/**
 * Create express Services
 */
var app = express();
app.set('title', 'Node Example');
app.listen(1337);
console.log('system waiting at http://localhost:1337');

var demoData = {
    'name': 'Max Mustermann',
    'age': '24',
    'city': 'Karlsruhe'
    
    
};

app.get("/:key", function(req, res) {

    var page = req.params.key;

    var mustacheData = {records: demoData};

    var htmlpagefromfilesystem = filesystem.readFileSync(page, "utf8");

    var resultPage = mustache.to_html(htmlpagefromfilesystem, mustacheData);

    res.send(resultPage);
});
