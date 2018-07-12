const express = require('express');
const path = require('path');
const app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/index.html'));
})

app.get('/client/:fileType/:fileName', function(req, res) {
	res.sendFile(path.join(__dirname + `/client/${req.params.fileType}/${req.params.fileName}`));
})

app.get('*', function(req, res) {
	res.redirect('/');
})

app.listen(process.env.PORT || 3000, function() {
	console.log(`server is listening on port ${process.env.PORT || 3000}`);
})
