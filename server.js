const express = require('express');
const path = require('path');
const app = express();

// Define a porta do servidor (usa a da Render ou a 3000 localmente)
const PORT = process.env.PORT || 3000;

// 1. Torna a pasta atual pública (isso faz o ads.txt funcionar automaticamente)
app.use(express.static(__dirname));

// 2. Sua rota principal (página inicial)
app.get('/', (req, res) => {
    res.send('Seu site está online!');
});

// 3. Inicialização do servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso na porta ${PORT}`);
});
