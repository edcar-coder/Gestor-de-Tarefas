const { autores } = require("./autores");

function listarAutores() {
      autores.forEach(autor => {
        console.log(autor)
      })

      }
      

    
    module.exports = { 
        listarAutores
    };