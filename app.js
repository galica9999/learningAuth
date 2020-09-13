var express                 = require('express'),
    mongoose                = require('mongoose'),
    passport                = require('passport'),
    bodyParser              = require('body-parser'),
    localStrategy           = require('passport-local'),
    passportLocalMongoose   = require('passport-local-mongoose');


var app = express();
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost:27017/auth', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to DB!'))
    .catch(error => console.log(error.message));

app.get('/', function(req,res){
    res.render('home');
});

app.get('/secret', function(req,res){
    res.render('secret');
});

app.listen(3000,'localhost', function(){
    console.log('server connected')
});