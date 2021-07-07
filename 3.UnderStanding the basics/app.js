const http = require('http');

function rqListener(req, res) {
    console.log(req);
}

const server = http.createServer((req, res) => {
    console.log(req);
});

server.listen(3000);