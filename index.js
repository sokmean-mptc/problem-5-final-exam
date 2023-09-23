const express = require('express');
var bodyParser = require("body-parser");
const app = express()
app.use(express.json())
app.use(bodyParser.json())

let data = [];

app.get('/all', (req, res) => {
    res.send(data)
});

app.post('/add', (req, res) => {
    const newItem = {
        id: data.length + 1,
        name: req.body.name
    };

    data.push(newItem);

    res.json(data);
});

app.listen(5000, ()=>{
    console.log("express is running on port 5000");
});