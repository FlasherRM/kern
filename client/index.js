// load the things we need
import express from "express";

const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    const title = 'Hello from EJS'
    res.render('pages/index', {
        title
    });
});


app.listen(8080);
console.log('8080 is the magic port');