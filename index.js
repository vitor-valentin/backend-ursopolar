const express = require('express');
const app = express();
const path = require('path');
let avaliacoes = [
    { id: 1, desc: "Amei a página!" },
    { id: 2, desc: "Parabéns :)" }
];

app.use(express.static(path.join(__dirname, 'src')));
app.use(express.json());

app.get('/', async (req,res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.get('/saibamais', async (req,res) => {
    res.sendFile(path.join(__dirname, 'src', 'saibamais.html'));
});

app.get('/avaliacao', (req, res) => {
    res.json(avaliacoes);
});

app.post('/avaliacao', (req, res) => {
    const novo={id: avaliacoes.length + 1, desc: req.body.av};
    avaliacoes.push(novo);
    res.status(201).json(novo);
});

app.put('/avaliacao/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const avaliacao = avaliacoes.find(av => av.id == id);
    if (!avaliacao) return res.status(404).json({erro: "Erro"});
    avaliacao.desc = req.body.desc;
    res.json(avaliacao);
});

app.delete('/avaliacao/:id', (req, res) => {
    const id = parseInt(req.params.id);
    avaliacoes = avaliacoes.filter(av => av.id !== id);
    res.json({ mensagem: `Avaliação ${id} removida` });
});

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080: http://localhost:8080');
});