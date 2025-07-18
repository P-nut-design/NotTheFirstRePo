const http = require('http');
const hostname = 'localhost';
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'Text/plain');
    if (req.url === '/about') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'Text/plain');
        res.end('About Page\n');
    } else if (req.url === '/contact') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'Text/plain');
        res.end('Contact Page\n');
    } else if (req.url == '/api') {
        res.statusCode = 200; 
        res.setHeadcer('Content-Type', 'application/json');
        const data = {
            message: 'Hello from API',
            timestamp: new Date().toISOString()
        }
        res.end(JSON.stringify(data));
    } else {
        res.end('Hello, World!\n');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});