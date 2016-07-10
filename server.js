var Cylon = require('cylon');
var http = require('http');
var curl = require('curlrequest');
var express = require("express"),
    app = express(),
    bodyParser = require('body-parser'),
    errorHandler = require('errorhandler'),
    methodOverride = require('method-override'),
    hostname = process.env.HOSTNAME || 'localhost',
    port = parseInt(process.env.PORT, 10) || 8080,
    publicDir = process.argv[2] || __dirname + '/public',
    path = require('path');





//after the server is started use ngrok to tunnel the api
Cylon.api({
    host: '127.0.0.1',
    port: '4040',
    ssl: false,
    auth:false
});
var test = Cylon.robot({
    name: 'omnius',
    connections: {
        arduino: {adaptor: 'firmata', port: '/dev/cu.usbmodem1421'}
    },
    // devices: {
    //     motor1PWR: {driver: 'direct-pin', pin: 7},
    //     motor1GND: {driver: 'direct-pin', pin: 6},
    //     motor2PWR: {driver: 'direct-pin', pin: 5},
    //     motor2GND: {driver: 'direct-pin', pin: 4}
    // },
    work: function () {

    },
    commands: function(){
        return {
            forward: this.Forward,
            backward: this.Backward,
            right: this.Right,
            left: this.Left
        };
    },
    Forward: function(){
        test.connections.arduino.pinMode(3, 'OUTPUT');
        test.connections.arduino.pinMode(5, 'OUTPUT');
        test.connections.arduino.pinMode(6, 'OUTPUT');
        test.connections.arduino.pinMode(9, 'OUTPUT');
        test.connections.arduino.pinMode(10, 'OUTPUT');
        test.connections.arduino.pinMode(11, 'OUTPUT');
        after((1).seconds(), function() {
            test.connections.arduino.digitalWrite(3, 255);
            test.connections.arduino.digitalWrite(5, 255);
            test.connections.arduino.digitalWrite(6, 0);
            test.connections.arduino.digitalWrite(9, 255);
            test.connections.arduino.digitalWrite(10, 255);
            test.connections.arduino.digitalWrite(11, 0);
        });
        after((2).seconds(), function() {
            test.connections.arduino.digitalWrite(3, 0);
            test.connections.arduino.digitalWrite(5, 0);
            test.connections.arduino.digitalWrite(6, 0);
            test.connections.arduino.digitalWrite(9, 0);
            test.connections.arduino.digitalWrite(10, 0);
            test.connections.arduino.digitalWrite(11, 0);
        });
        console.log('forward');
    },
    Backward: function(){
        test.connections.arduino.pinMode(3, 'OUTPUT');
        test.connections.arduino.pinMode(5, 'OUTPUT');
        test.connections.arduino.pinMode(6, 'OUTPUT');
        test.connections.arduino.pinMode(9, 'OUTPUT');
        test.connections.arduino.pinMode(10, 'OUTPUT');
        test.connections.arduino.pinMode(11, 'OUTPUT');
        after((1).seconds(), function() {
            test.connections.arduino.digitalWrite(3, 255);
            test.connections.arduino.digitalWrite(5, 255);
            test.connections.arduino.digitalWrite(6, 255);
            test.connections.arduino.digitalWrite(9, 0);
            test.connections.arduino.digitalWrite(10, 0);
            test.connections.arduino.digitalWrite(11, 255);
        });
        after((2).seconds(), function() {
            test.connections.arduino.digitalWrite(3, 255);
            test.connections.arduino.digitalWrite(5, 255);
            test.connections.arduino.digitalWrite(6, 0);
            test.connections.arduino.digitalWrite(9, 0);
            test.connections.arduino.digitalWrite(10, 0);
            test.connections.arduino.digitalWrite(11, 0);
        });
        console.log('backward');
    },
    Left: function(){
        test.connections.arduino.pinMode(3, 'OUTPUT');
        test.connections.arduino.pinMode(5, 'OUTPUT');
        test.connections.arduino.pinMode(6, 'OUTPUT');
        test.connections.arduino.pinMode(9, 'OUTPUT');
        test.connections.arduino.pinMode(10, 'OUTPUT');
        test.connections.arduino.pinMode(11, 'OUTPUT');
        after((1).seconds(), function() {
            test.connections.arduino.digitalWrite(3, 255);
            test.connections.arduino.digitalWrite(5, 255);
            test.connections.arduino.digitalWrite(6, 255);
            test.connections.arduino.digitalWrite(9, 0);
            test.connections.arduino.digitalWrite(10, 255);
            test.connections.arduino.digitalWrite(11, 0);
        });
        after((2).seconds(), function() {
            test.connections.arduino.digitalWrite(3, 0);
            test.connections.arduino.digitalWrite(5, 0);
            test.connections.arduino.digitalWrite(6, 0);
            test.connections.arduino.digitalWrite(9, 0);
            test.connections.arduino.digitalWrite(10, 0);
            test.connections.arduino.digitalWrite(11, 0);
        });
        console.log('left');
    },
    Right: function(){
        test.connections.arduino.pinMode(3, 'OUTPUT');
        test.connections.arduino.pinMode(5, 'OUTPUT');
        test.connections.arduino.pinMode(6, 'OUTPUT');
        test.connections.arduino.pinMode(9, 'OUTPUT');
        test.connections.arduino.pinMode(10, 'OUTPUT');
        test.connections.arduino.pinMode(11, 'OUTPUT');
        after((1).seconds(), function() {
            test.connections.arduino.digitalWrite(3, 255);
            test.connections.arduino.digitalWrite(5, 255);
            test.connections.arduino.digitalWrite(6, 0);
            test.connections.arduino.digitalWrite(9, 255);
            test.connections.arduino.digitalWrite(10, 0);
            test.connections.arduino.digitalWrite(11, 255);
        });
        after((2).seconds(), function() {
            test.connections.arduino.digitalWrite(3, 0);
            test.connections.arduino.digitalWrite(5, 0);
            test.connections.arduino.digitalWrite(6, 0);
            test.connections.arduino.digitalWrite(9, 0);
            test.connections.arduino.digitalWrite(10, 0);
            test.connections.arduino.digitalWrite(11, 0);
        });
        console.log('right');
    }
});
test.start();


app.get("/api/robots/omnius/commands/forward", function (req, res) {
    res.sendStatus(200);
    curl.request('http://localhost:4040/api/robots/omnius/commands/forward', function(err) {
        if(err){
            console.log(err);
        }
    });
});
app.get("/api/robots/omnius/commands/backward", function (req, res) {
    res.sendStatus(200);
    curl.request('http://localhost:4040/api/robots/omnius/commands/backward', function(err) {
        if(err){
            console.log(err);
        }
    });
});
app.get("/api/robots/omnius/commands/left", function (req, res) {
    res.sendStatus(200);
    curl.request('http://localhost:4040/api/robots/omnius/commands/left', function(err) {
        if(err){
            console.log(err);
        }
    });
});
app.get("/api/robots/omnius/commands/right", function (req, res) {
    res.sendStatus(200);
    curl.request('http://localhost:4040/api/robots/omnius/commands/right', function(err) {
        if(err){
            console.log(err);
        }
    });
});

app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(publicDir));
app.use(errorHandler({
    dumpExceptions: true,
    showStack: true
}));

console.log("Simple static server showing %s listening at http://%s:%s", publicDir, hostname, port);
app.listen(port, hostname);
