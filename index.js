var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('{ "response": "1" }');
});

app.get('/login', function (req, res) {
   res.send('{ "response": "Universitas Pendidikan Ganesha" }');
});
app.get('/will', function (req, res) {
    res.send('{ "response": "Perguruan tinggi" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": "iam ready!" }');
});
app.get('/cicd', function (req, res) {
    res.send('{ "response": " continuous integration and continuous delivery/deployment " }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
