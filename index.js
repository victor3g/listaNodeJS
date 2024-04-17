const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Define o diretório público para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota raiz para servir a página de boas-vindas
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para servir a página de contato
app.get('/contato', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contato.html'));
});

// Rota para servir a página "Sobre"
app.get('/sobre', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'sobre.html'));
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

