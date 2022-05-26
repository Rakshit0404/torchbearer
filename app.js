const express = require('express');
const path = require('path');
const app = express();
const ejsmate = require('ejs-mate');
const io = require("socket.io");
const methodOverride = require("method-override");

app.set('view engine', 'ejs');
app.engine('ejs', ejsmate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'views/styles')));

app.get('/', (req, res) => {
    // res.render("pages/home");
    res.render("pages/classes");
});

app.get('/:classid', (req, res)=>{
    const classid=req.params.classid;
    res.render("pages/class", {classid});
});

app.listen(3000, () => {
    console.log("lisitening to port 3000");
});