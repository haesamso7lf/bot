var express = require('express'),
    bodyParser = require('body-parser'),
    request = require('request');
var app = express();
app.get('/webhook', (req, res) => {
    res.send('hello');
});

app.listen(3000, () => {
    console.log("running");
})