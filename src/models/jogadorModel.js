var database = require("../database/config");


function buscarVotosJogador() {
    console.log("Executando SQL: buscarVotosJogador");
    var instrucaoSql = `
        SELECT 
            jogadorpref,
            COUNT(jogadorpref) AS votos
        FROM Usuario
        GROUP BY jogadorpref
        ORDER BY votos DESC;
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarVotosJogador
};