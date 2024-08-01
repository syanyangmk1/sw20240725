const http  = require('http');
const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(_dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', 3000);

app.get("/", (req, res)=>{
    //res.redirect('http://google.com');

    res.writeHead(200, {"content-type":"text/html; charst=UTF-8"});
    //res.end("안영 세계");

    var obj = {no:120, name:"HONG"};
    //res.end(JSON.stringify(obj));
    //send()은 수식 or 문자열을 화면에 보여준다
    res.send(obj);
});

const sercer = http.createServer(app);
server.listen(app.get('port'),()=>{
    console.log('노드.js 서버 실행중 >>> http://localhost:${app.get('port')}');
});