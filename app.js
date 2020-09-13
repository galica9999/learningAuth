var express = require('express');


var app = express();
app.set('view engine', 'ejs');

app.get('/', function(req,res){
    res.render('home');
});

app.listen(3000,'localhost', function(){
    console.log('server connected')
});