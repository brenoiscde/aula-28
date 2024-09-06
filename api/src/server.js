const express = require("express");
const fsp = require("fs/promises")
const path = require("path")

const caminhoTexto = path.join(__dirname, "mocks/dados.txt");
const servidor = express();

servidor.use(express.json());

servidor.get("/dados", async (require, response) => {
    let dados = await fsp.readFile(caminhoTexto, "utf-8");
    dados = dados.split("\n").join("").split("\r").filter(linha => linha.trim() !== "");

    response.json(dados)
})

servidor.listen(3000, () => console.log("O servidor está rodando..."))