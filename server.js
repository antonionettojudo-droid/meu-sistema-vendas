const http = require('http');
const fs = require('fs');
const PORT = 8080;

http.createServer((req, res) => {

    // Arquivo de verificação do Google Search Console
    if (req.url === '/google9456b0c2f9fcbcc0.html') {
        fs.readFile('./google9456b0c2f9fcbcc0.html', (err, file) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('Arquivo de verificacao nao encontrado');
                return;
            }

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(file);
        });

        return;
    }

    // ROTA ADICIONADA: Mapa do Site (Sitemap)
    if (req.url === '/sitemap.xml') {
        fs.readFile('./sitemap.xml', (err, file) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('Sitemap nao encontrado');
                return;
            }

            res.writeHead(200, { 'Content-Type': 'text/xml' });
            res.end(file);
        });

        return;
    }

    // Página principal (Carrega para qualquer outra rota)
    fs.readFile('./index.html', (err, html) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Arquivo nao encontrado');
            return;
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html);
    });

}).listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
