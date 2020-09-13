var express                 = require('express'),
    mongoose                = require('mongoose'),
    passport                = require('passport'),
    bodyParser              = require('body-parser'),
    User                    = require('./models/user.js'),
    localStrategy           = require('passport-local'),
    passportLocalMongoose   = require('passport-local-mongoose');

//app setup
var app = express();
app.set('view engine', 'ejs');
app.use(require('express-session')({
    secret: "ferret",
    resave: false,
    saveUninitialized : false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

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