var http = require('http');
var app = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello ECE\n');
})
module.exports = app
//console.log('Server running at http://127.0.0.1:1337/');
