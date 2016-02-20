var express = require('express');
var app = express();

var mongojs = require('mongojs');
var db = mongojs('studentList', ['studentList']);

var bodyParser = require('body-parser');

/*app.get('/', function(request, response){
	response.send("Hello world from server.js");
});*/

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/studentList', function(request, response){
	/*console.log("Received a GET request");
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
	response.json(studentList);*/

	db.studentList.find(function(error, docs){
		console.log(docs);
		response.json(docs);
	});
});

app.post('/studentList', function(request, response){
	console.log(request.body);
	db.studentList.insert(request.body, function(error, doc){
		response.json(doc);
	});
});

app.delete('/studentList/:recordId', function(request, response){
	var recordId = request.params.recordId;
	console.log(recordId);
	db.studentList.remove({_id: mongojs.ObjectID(recordId)}, function(error, doc){
		response.json(doc);
	});
});

app.get('/studentList/:recordId', function(request, response){
	var recordId = request.params.recordId;
	console.log(recordId);
	db.studentList.findOne({_id: mongojs.ObjectID(recordId)}, function(error, doc){
		response.json(doc);
	});
});

app.put('/studentList/:recordId', function(request, response){
	var recordId = request.params.recordId;
	console.log(request.body.firstName);
	db.studentList.findAndModify({
		query: {_id: mongojs.ObjectID(recordId)},
		update: {$set : {firstName: request.body.firstName,
						 lastName: request.body.lastName,
						 id: request.body.id}}, new: true}, function(error, doc){
						 	response.json(doc);
						 });
});

var port = Number(process.env.PORT || 3000);

app.listen(port);
console.log("Server running on port 3000");