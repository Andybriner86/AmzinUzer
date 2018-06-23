const express = require('express');
const path = require('path');
const app = express();

app.get('/', function(req, res) {
    res.send('request recieved');
    //res.sendFile(path.join(__dirname + '/../client/dist/index.html'));
})

app.get('*', function(req, res) {
	res.redirect('/');
})

app.listen(process.env.PORT || 3000, function() {
	console.log(`server is listening on port ${process.env.PORT || 3000}`);
})
