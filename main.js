const log = console.log;

const back = require('androidjs').back;

back.on("Client runtime", function () {
	back.send("Node runtime", "App is running...");
});

const fs = require('fs');
const path = require('path');

const http = require('http').createServer((request, response) => {

	log(request.url, '\t', request.method);

	let filePath, contentType, fileExt, origin;

	origin = '*';

	fileExt = path.extname(request.url);

	// CHECK FILE EXTENSION
	switch (fileExt) {
		case '.css':
			contentType = 'text/css';
			break;
		case '.js':
			contentType = 'text/javascript';
			break;
		case '.svg':
			contentType = 'image/svg+xml';
			break;
		default:
			contentType = 'text/html';
	}

	// CHECK PATH
	if (contentType === 'text/html' && request.url === '/') {
		filePath = path.join(__dirname, 'public', 'graph.html');
	} else if (contentType === 'text/html' && request.url.slice(-1) === '/') {
		filePath = path.join(__dirname, 'public', request.url, 'graph.html');
	} else if (contentType === 'text/html') {
		filePath = path.join(__dirname, 'public', request.url, 'graph.html');
	} else {
		filePath = path.join(__dirname, 'public', request.url);
	}

	// CHECK IF FILE EXISTS AND SERVE THEM
	if (fs.existsSync(filePath)) {

		if (contentType.includes('image')) {
			fs.readFile(filePath, '', (err, data) => {
				if (err) console.error(`${err.name}/t${err.message}`);
				response.writeHead(200, {
					'Content-Type': contentType,
					'Access-Control-Allow-Origin': origin
				});
				response.end(data);
				return;
			});
		}
		fs.readFile(filePath, 'utf-8', (err, data) => {
			if (err) console.error(`${err.name}/t${err.message}`);
			response.writeHead(200, {
				'Content-Type': contentType,
				'Access-Control-Allow-Origin': origin
			});
			response.end(data);
			return;
		});
	} else {
		response.writeHead(404, {
			'Content-Type': 'text/plain'
		});
		response.end('Not Found...');
		return;
	}

}).listen(8000);