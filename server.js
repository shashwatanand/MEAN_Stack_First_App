var express = require('express');
var app = express();

/*app.get('/', function(request, response){
	response.send("Hello world from server.js");
});*/

app.use(express.static(__dirname + "/public"));

app.listen(3000);
console.log("Server running on port 3000");