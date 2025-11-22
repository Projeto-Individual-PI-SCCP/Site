var database = require("../database/config");

function registrarTentativa(idQuiz, idUsuario, acertos, erros, pontuacao) {

    var instrucaoSql = `
        INSERT INTO QuizPontuacao (Quiz_idQuiz, Usuario_idUsuario, pontuacao, acertos, erros)
        VALUES (${idQuiz}, ${idUsuario}, ${pontuacao}, ${acertos}, ${erros});
    `;

    console.log("Executando a instrução SQL:\n" + instrucaoSql);

    return database.executar(instrucaoSql);
}

module.exports = {
    registrarTentativa
}