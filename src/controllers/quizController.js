var quizModel = require("../models/quizModel");

function registrarTentativa(req, res) {

    var idQuiz = req.body.Quiz_idQuiz;
    var idUsuario = req.body.Usuario_idUsuario;
    var pontuacao = req.body.pontuacao;
    var acertos = req.body.acertos;
    var erros = req.body.erros;

    if (idUsuario == undefined) {
        res.status(400).send("idUsuario está undefined!");
    } else if (acertos == undefined) {
        res.status(400).send("acertos está undefined!");
    } else if (erros == undefined) {
        res.status(400).send("erros está undefined!");
    } else {

        quizModel.registrarTentativa(idQuiz, idUsuario, acertos, erros, pontuacao)
            .then(function (resultado) {
                res.status(200).json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao registrar tentativa! Erro:", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }

}

module.exports = {
    registrarTentativa
}
