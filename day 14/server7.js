var fs = require('fs');
fs.appendFile('banana.txt','Hello hru?' ,function(err,file){
	if(err) throw err;
	console.log('saved!');
});