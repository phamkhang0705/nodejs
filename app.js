const express = require('express');
const app = new express();
const ejs = require('ejs');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const fileUpload = require('express-fileupload');

const customMiddleWare = (req,res,next)=>{
    console.log('Custom middle ware called!');
    next();
}

const newPostController = require('./controllers/newPost');
const homeController = require('./controllers/home');
const storePostController = require('./controllers/storePost');
const getPostController = require('./controllers/getPost');
const newUserCotroller = require('./controllers/newUser');

const validateMiddleWare = require('./middlewares/validationMiddleware');
const storeUser = require('./controllers/storeUser');

app.use(express.static('public'));
app.use(customMiddleWare);
app.use(fileUpload());
mongoose.connect('mongodb://localhost:27017/?serverSelectionTimeoutMS=5000&connectTimeoutMS=10000&3t.uriVersion=3&3t.connection.name=kaangkun_blog&3t.alwaysShowAuthDB=true&3t.alwaysShowDBFromUserRole=true',{useNewUrlParser:true});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/posts/create',validateMiddleWare);
app.set('view engine','ejs');

app.get('/',homeController)

app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/contact', (req, res) => {
    res.render('contact');
})

app.get('/post/:id', getPostController);

app.get('/posts/new', newPostController);
app.get('/auth/register', newUserCotroller);

app.post('/posts/store',storePostController);
app.post('/users/register',storeUser);
app.listen(3000,()=>{
    console.log(
        "App listening on port 3000."
    );
});