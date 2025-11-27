var database = require("../database/config");

// KPI 3 & Gráfico 2: Jogador Preferido da RPZ (Contagem de Votos)
function buscarVotosJogador() {
    console.log("Executando SQL: buscarVotosJogador");
    // Agrupa a contagem de votos por jogador preferido
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