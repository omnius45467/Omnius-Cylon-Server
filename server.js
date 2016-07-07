var Cylon = require('cylon');
//after the server is started use ngrok to tunnel the api
Cylon.api({
    host: '127.0.0.1',
    port: '8080',
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
        test.connections.arduino.pinMode(7, 'OUTPUT');
        test.connections.arduino.pinMode(6, 'OUTPUT');
        test.connections.arduino.pinMode(5, 'OUTPUT');
        test.connections.arduino.pinMode(4, 'OUTPUT');
        after((1).seconds(), function() {
            test.connections.arduino.digitalWrite(7, 1);
            test.connections.arduino.digitalWrite(6, 0);
            test.connections.arduino.digitalWrite(5, 0);
            test.connections.arduino.digitalWrite(4, 1);
        });
        after((5).seconds(), function() {
            test.connections.arduino.digitalWrite(7, 0);
            test.connections.arduino.digitalWrite(6, 0);
            test.connections.arduino.digitalWrite(5, 0);
            test.connections.arduino.digitalWrite(4, 0);
        });
        console.log('forward');
    },
    Backward: function(){
        test.connections.arduino.pinMode(7, 'OUTPUT');
        test.connections.arduino.pinMode(6, 'OUTPUT');
        test.connections.arduino.pinMode(5, 'OUTPUT');
        test.connections.arduino.pinMode(4, 'OUTPUT');
        after((1).seconds(), function() {
            test.connections.arduino.digitalWrite(7, 0);
            test.connections.arduino.digitalWrite(6, 1);
            test.connections.arduino.digitalWrite(5, 1);
            test.connections.arduino.digitalWrite(4, 0);
        });
        after((5).seconds(), function() {
            test.connections.arduino.digitalWrite(7, 0);
            test.connections.arduino.digitalWrite(6, 0);
            test.connections.arduino.digitalWrite(5, 0);
            test.connections.arduino.digitalWrite(4, 0);
        });
        console.log('backward');
    },
    Left: function(){
        test.connections.arduino.pinMode(7, 'OUTPUT');
        test.connections.arduino.pinMode(6, 'OUTPUT');
        test.connections.arduino.pinMode(5, 'OUTPUT');
        test.connections.arduino.pinMode(4, 'OUTPUT');
        after((1).seconds(), function() {
            test.connections.arduino.digitalWrite(7, 1);
            test.connections.arduino.digitalWrite(6, 0);
            test.connections.arduino.digitalWrite(5, 1);
            test.connections.arduino.digitalWrite(4, 0);
        });
        after((5).seconds(), function() {
            test.connections.arduino.digitalWrite(7, 0);
            test.connections.arduino.digitalWrite(6, 0);
            test.connections.arduino.digitalWrite(5, 0);
            test.connections.arduino.digitalWrite(4, 0);
        });
        console.log('left');
    },
    Right: function(){
        test.connections.arduino.pinMode(7, 'OUTPUT');
        test.connections.arduino.pinMode(6, 'OUTPUT');
        test.connections.arduino.pinMode(5, 'OUTPUT');
        test.connections.arduino.pinMode(4, 'OUTPUT');
        after((1).seconds(), function() {
            test.connections.arduino.digitalWrite(7, 0);
            test.connections.arduino.digitalWrite(6, 1);
            test.connections.arduino.digitalWrite(5, 0);
            test.connections.arduino.digitalWrite(4, 1);
        });
        after((5).seconds(), function() {
            test.connections.arduino.digitalWrite(7, 0);
            test.connections.arduino.digitalWrite(6, 0);
            test.connections.arduino.digitalWrite(5, 0);
            test.connections.arduino.digitalWrite(4, 0);
        });
        console.log('right');
    }
});
test.start();