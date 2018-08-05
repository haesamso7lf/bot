var express = require('express'),
    bodyParser = require('body-parser'),
    request = require('request');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var PORT = process.env.PORT || 3000
app.get('/', (req, res) => {
    res.send('facebook api');
});

app.get('/webhook', (req, res) => {
    if(req.query["hub.verify_token"] === "myTokenAndShit") {
        req.send(req.query["hub.challenge"]);
    }
    res.send('wrong token')
});

app.listen(PORT, () => {
    console.log("running");
});