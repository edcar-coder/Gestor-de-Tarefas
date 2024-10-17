const { livros } = require("./livros");

function criarLivros( titulo, genero, autor) {
    const novoLivro = {titulo, genero, autor};
    livros.push(novoLivro)
}

    module.exports = {
        criarLivros
    };