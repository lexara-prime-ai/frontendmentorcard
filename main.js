const log = console.log;

const back = require('androidjs').back;

back.on("Client runtime", function(){
	back.send("Node runtime", "App is running...");
});

const fs = require('fs');
const path = require('path');

const http = require('http').createServer((request, response) => {

	log(request.url, '\t', request.method);

	let dirPath = path.join(__dirname);
	let filePath = path.join(__dirname, '')

	if (request.url === '/') {
		fs.readFile(path)
	}

}).listen(8000);