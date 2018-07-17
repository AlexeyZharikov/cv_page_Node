


let express = require('express');
let app = express();


app.use('/static', express.static('static'));
app.set('view engine', 'ejs');

app.get('/', (request,response)=>{
    response.render('index');

});
app.get('/cv', (request,response)=>{
    response.render('cv');

});
app.get('/projects', (request,response)=>{
    response.render('project');

});

app.get('/contact', (request,response)=>{
    response.render('contact');

});

app.listen(3000);





console.log("port 3000");