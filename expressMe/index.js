var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/pages');

app.get('/',function(req,res){
	//res.render('default');
	res.render('default', {title: "sam"});
	//res.send("hadadadas");
});
app.get('/aboutme/:name',function(req,res){
	res.send(req.params.name);
});
app.get('/contactme',function(req,res){
	res.send("ocntact");
});
app.get('*',function(req,res){
	res.send("NOT FOUND");
});



var server = app.listen(3000,function() { 
	console.log('test started on 3000');
});
