const http = require('http');
const fs = require('fs');
const PORT = 8080;

http.createServer((req, res) => {

    // 1. Arquivo de verificação do Google Search Console
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

    // 2. Mapa do Site (Sitemap)
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

    // 3. ROTA ADICIONADA: Arquivo de Anúncios (ads.txt)
    if (req.url === '/ads.txt') {
        fs.readFile('./ads.txt', (err, file) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('Arquivo ads.txt nao encontrado');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(file);
        });
        return;
    }

    // 4. Página principal (Carrega para qualquer outra rota)
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
