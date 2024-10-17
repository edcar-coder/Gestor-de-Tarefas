const { autores } = require("./autores");

function criarAutor(nome, email) {
const novoAutor = {nome, email };
autores.push(novoAutor);
return novoAutor;
};

module.exports = {criarAutor};



