const prompt = require("prompt-sync")();
const { criarAutor  } = require("./autor/criarAutor");
const { criarLivros } = require("./livros/criarLivros");
const { listarAutores } = require("./autor/listarAutor");
const { listarLivros } = require("./livros/listarLivros");

criarAutor("zezinho","zezinho@email.com");
criarLivros("livro o mundo depois do amahã","documentario", "Algor");

const autor1 = criarAutor("Zezin", "zezinho@email.com");
criarLivros("Livro de Zezinnho", autor1,"12345");

const autor2 = criarAutor("Joaozin", "joazin@email.com");
criarLivros("Livro de Joaozin", autor2, "12345");


listarAutores();
listarLivros();
