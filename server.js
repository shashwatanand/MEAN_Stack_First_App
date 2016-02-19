var express = require('express');
var app = express();

/*app.get('/', function(request, response){
	response.send("Hello world from server.js");
});*/

app.use(express.static(__dirname + "/public"));

app.get('/studentList', function(request, response){
	console.log("Received a GET request");
	student1 = {
		firstName: 'Manish',
		lastName: 'Chahar',
		id: '1'
	};

	student2 = {
		firstName: 'Shashwat',
		lastName: 'Anand',
		id: '4'
	};

	student3 = {
		firstName: 'Shubhangi',
		lastName: 'Sinha',
		id: '2'
	};

	var studentList = [student1, student2, student3];
	response.json(studentList);
});

app.listen(3000);
console.log("Server running on port 3000");