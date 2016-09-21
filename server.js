var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello Protracting World!');
});

app.listen(3030, function () {
  console.log('Protractor server listening on port 3030!');
});
