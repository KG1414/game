// var http = require('http');
// var fs = require('fs');
const express = require("express");
var path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

const port = 3000;

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(port, () => {
    console.log(`Example app listening at port:${port}`);
});