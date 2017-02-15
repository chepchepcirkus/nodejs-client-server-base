#!/usr/bin/env node

/**
 * Main Function
 */
var main = function(req, res) {
    // Define here module required
    //var DB = require('./DB');

    // Router
    var action = url.parse(req.url).pathname.replace(/\//g, '');

    // retrieve POST params here
    var jsonString = '';

    req.on('data', function (data) {
        jsonString += data;
    });

    req.on('end', function () {

        if(jsonString != '') {
            query = JSON.parse(jsonString);
        }

        res.writeHead(
            200,
            {'Content-Type': 'application/json'}
        );
        res.end(JSON.stringify({'success': 'The app runs with success'}));

        var query = '';
    });
};

/**
 * App launcher
 */
try {

  // Initialize variables for node Web server
  var http = require('http');
  var server = http.createServer(main);
  
  // Initialize variable for url parser
  var url = require("url");
  
  // Launch server
  server.listen(8080);

} catch (exception) {
  console.log(exception);
}
