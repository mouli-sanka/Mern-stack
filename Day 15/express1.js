var express = require('express');
var app = express();
app.get('/mouli',function(req,res){
	res.send("welcome to express js world tested by mouli");
});

app.listen(3000);
