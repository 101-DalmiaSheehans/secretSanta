var http = require('http');
var util = require('util');
var secret_santa = require ('./secretSanta.js');

var server = http.createServer(requestListener);
server.listen(8080);
		
function requestListener(req, res) {
  //console.log('req')
  //console.log(util.inspect(req, false , null));
  //console.log('res');
  //console.log(util.inspect(res, false , null));
  res.writeHead(404, {'Content-Type': 'text/plain'});
  res.end(secret_santa.getSecretSanta('names.txt'));
}

console.log('Server running on port 8080.');