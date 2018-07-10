let fs = require('fs');


let http = require('http');

let server = http.createServer((request, response) => {
    response.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
    let myReadShort = fs.createReadStream(__dirname + '/index.html', 'utf-8');
    myReadShort.pipe(response);
});

server.listen(3000, '127.0.0.1');
console.log("port 3000");