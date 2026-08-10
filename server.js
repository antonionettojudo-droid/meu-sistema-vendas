// 1. IMPORTAÇÕES (Ficam no topo do arquivo)
const express = require('express');
const path = require('path'); // 🔴 Garanta que esta linha está aqui

const app = express();

// 2. SUAS OUTRAS CONFIGURAÇÕES E ROTAS JÁ EXISTENTES
app.get('/', (req, res) => {
    res.send('Seu site está online!');
});

// 3. ROTA DO ADS.TXT (Cole aqui, antes do app.listen)
app.get('/ads.txt', (req, res) => {
    res.sendFile(path.join(__dirname, 'ads.txt'));
});

// 4. INICIALIZAÇÃO DO SERVIDOR (Deve ser sempre a última coisa do arquivo)
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
