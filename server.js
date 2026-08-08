const http = require('http');
const fs = require('fs');
const PORT = 8080;

http.createServer((req, res) => {
    fs.readFile('./index.html', (err, html) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Arquivo nao encontrado');
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(html);
        res.end();
    });
}).listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
