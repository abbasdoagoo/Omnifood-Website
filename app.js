const express = require('express');
const mongoose = require('mongoose');
const Userscomment = require('./models/userComment.js');

const app = express();


// connect to db
const dbURI = "mongodb+srv://Omnifoodweb:omnifood1374@cluster0.1svx2.mongodb.net/Omnifood?retryWrites=true&w=majority";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        console.log('connected to database')
    })
    .catch((error) => {
        console.log(error)
    });

app.set('view engine', 'ejs');

// static files
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

// listen for requests
app.listen(3000);

//routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Omnifood' });
});

app.post('/', (req, res)=>{
    const comment = new Userscomment(req.body);
   
    comment.save()
    .then(()=>{
        res.redirect('/');
    })
    .catch(err=>console.log(err));
});

// 404 page
app.use((req, res) => {
    res.render('404', { title: 'page not found' });
});


