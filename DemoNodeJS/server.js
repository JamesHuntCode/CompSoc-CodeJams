//var http = require ("http");
const express = require ("express");
var fs = require ("fs");

const app = express();

app.use(express.static('public'));

/*var server = http.createServer (function (req, res) {
    res.write("hello world!");
    res.end();
});*/

/*var server = http.createServer (function (req, res) {
    fs.readFile ('text.txt', function (err, data) {
        if (!err) {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write(data);
            res.end();
        }
    });
});*/

/*var server = http.createServer (function (req, res) {
    fs.readFile ('index.html', function (err, data) {
        if (!err) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        }
    });
});*/

var port = process.env.PORT || 8080;

app.listen (port, function () {
    console.log("Server running at port " + port);
});

//server.listen(8080);

//console.log("Running on localhost:8080");
