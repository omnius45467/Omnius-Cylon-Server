var request = require('request');

// quest('https://7bce550f.ngrok.io/api/robots/omnius/commands/forward', function () {
//     if (this.statusCode == 200) {
//         console.log(this);
//     }else{
//         console.log('failed');
//     }
// });
// var request = require('request');
request('https://7bce550f.ngrok.io/api/robots/omnius/commands/forward', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body); // Show the HTML for the Google homepage.
    }
})