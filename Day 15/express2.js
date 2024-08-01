var express = require('express');
var app = express();
app.get('/Home',function(req,res){
	res.send("welcome to home page!,made by mouli");
});
app.post('/contact',function(req,res){
	res.send("You jst called the post method at'/contact'!\n");
});
app.all('/Text',function(req,res){
	res.send("HTTP method doesnt have any effort on this route!")
});
app.listen(3000);
