const { livros } = require("./livros");

function listarLivros() {
    livros.forEach(livro => {
        console.log(livro)
    });
}
module.exports ={
    listarLivros
};