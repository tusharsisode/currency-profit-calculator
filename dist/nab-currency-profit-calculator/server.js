const express = require('express');
const http = require('http');

const app = express();

const port = process.env.PORT || 8081;

app.use(express.static(__dirname));

const server = http.createServer(app);

server.listen(port, ()=> console.log("Running on port: " +port));