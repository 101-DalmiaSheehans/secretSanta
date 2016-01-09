var express = require('express')
    app = express();

var secret_santa = require ('./secretSanta.js');

app.get('/' , function (req, res) {
	res.send(secret_santa.getSecretSanta('names.txt'))
});


//app.use(express.static(__dirname + '/public'));
app.listen(8080);