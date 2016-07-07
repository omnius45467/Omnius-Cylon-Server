var five = require("johnny-five"),
    api = require("cylon-api-http"),
    board = new five.Board({
        // repl: false,
        debug: false,
        port: "/dev/cu.usbmodem1421"
    });
board.on("ready", function() {
    this.repl.inject({
        ledOn: function ledOn(){
            board.pinMode(13, five.Pin.OUTPUT);
            board.digitalWrite(13, 1);
        },
        ledOff: function ledOff(){
            board.pinMode(13, five.Pin.OUTPUT);
            board.digitalWrite(13, 0);
        }
    });
});