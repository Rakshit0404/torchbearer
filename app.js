const express = require('express');
const app = express();
const io = require("socket.io");

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send("hello");
})

app.listen(3000, () => {
    console.log("lisitening to port 3000");
});