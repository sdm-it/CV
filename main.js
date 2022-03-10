var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8000);
