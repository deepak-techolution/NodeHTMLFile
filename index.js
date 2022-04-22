const http = require('http');
const fs = require('fs');
const port = process.env.port || "4200";

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", 'text/html');
    res.statusCode = 200;
    const data = fs.readFileSync('./index.html');
    res.end(data.toString())
})

server.listen(port, () => {
    console.log('Server is listening on: ', port)
})

