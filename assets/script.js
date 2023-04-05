
front.send("Client runtime");

front.on("Node runtime", function(msg){
	console.log(msg);
	$('#msg').html(msg);
});


