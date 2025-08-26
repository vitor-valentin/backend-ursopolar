const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'src')));

app.get("/",async (req, res) => {
    res.sendFile(path.join(__dirname, "src", "index.html"));
});

app.get("/saiba-mais", async (req, res) => {
    res.sendFile(path.join(__dirname, "src", "saiba_mais.html"));
});

app.get("/contato", async (req, res) => {
    res.sendFile(path.join(__dirname, "src", "contato.html"));
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});