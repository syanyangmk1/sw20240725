const http  = require('http');
const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(_dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', 3000);

app.get("/", (req, res)=>{
    res.redirect('http://google.com');
});

const sercer = http.createServer(app);
server.listen(app.get('port'),()=>{
    console.log('노드.js 서버 실행중 >>> http://localhost:${app.get('port')}');
});