var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var buf = fs.readFileSync('index.html');
var string = buf.toString();


app.get('/', function(request, response) {
  response.send(string);
});
app.use("/static", express.static(__dirname+"/static"));


var port = process.env.PORT || 8000;

app.listen(port, function() {
  console.log("Listening on " + port);
});
