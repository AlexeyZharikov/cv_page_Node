let bodyParser = require('body-parser');
let express = require('express');
let nodemailer = require('nodemailer');

let app = express();

let urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use('/static', express.static('static'));
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
    response.render('index');

});
app.get('/cv', (request, response) => {
    response.render('cv');

});
app.get('/projects', (request, response) => {
    response.render('project');

});

app.get('/contact', (request, response) => {
    response.render('contact');

});
app.post('/contact', urlencodedParser, (request, response) => {

    let sentMes = `
        <p>name: ${request.body.name}</p>
        <p>E-mail: ${request.body.email}</p>
        <p>messgae: ${request.body.message}</p>
        `;

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
            user: '*****@gmail.com',
            pass: '****'
        }
    });

    let mailOptions = {
        from: 'my CV-page<mefis2.0@gmail.com>',
        to: 'mefis2.0@gmail.com',
        subject: 'You have new message from CV-page',
        text: 'you have new message!',

        html: sentMes
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }

    });



    console.log(request.body);
    response.render('contact');
});

app.listen(3000);


