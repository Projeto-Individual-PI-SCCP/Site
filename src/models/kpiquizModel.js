var database = require("../database/config");


function buscarMedia() {
    console.log("Executando SQL: buscarMedia");
    var instrucaoSql = `
        SELECT 
            AVG(acertos) AS mediaAcertos
        FROM 
            QuizPontuacao; 
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarMedia
};