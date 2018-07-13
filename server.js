
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





console.log("port 3000");