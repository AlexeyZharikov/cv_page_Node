
let express = require('express');
let fs = require('fs');
let app = express();

app.use(express.static('static'));

app.get('/', (request,response)=>{
    response.sendFile(__dirname + '/static/index.html', 'utf-8');

});
app.get('/cv', (request,response)=>{
    response.sendFile(__dirname + '/static/index.html', 'utf-8');

});
app.get('/projects', (request,response)=>{
    response.sendFile(__dirname + '/static/index.html', 'utf-8');

});

app.get('/contact', (request,response)=>{
    response.sendFile(__dirname + '/static/index.html', 'utf-8');

});

app.listen(3000);




// let http = require('http');

// let server = http.createServer((request, response) => {
//     response.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
//     let myReadShort = fs.createReadStream(__dirname + '/index.html', 'utf-8');
//     myReadShort.pipe(response);
// });

// server.listen(3000, '127.0.0.1');
console.log("port 3000");