const jogadorModel = require("../models/jogadorModel");

function buscarJogadorFavorito(req, res) {
    jogadorModel.buscarVotosJogador().then(resultado => {
        
        const labels = [];
        const data = [];

        for (let i = 0; i < resultado.length; i++) {
            labels.push(resultado[i].jogadorpref);
            data.push(resultado[i].votos);
        }

        const graficoPizza = {
            labels,
            data
        };

        let jogadorPreferido = "N/A";
        if (resultado.length > 0) {
            jogadorPreferido = resultado[0].jogadorpref;
        }

        res.json({
            jogadorPreferido,
            graficoPizza    
        });

    }).catch(erro => {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarJogadorFavorito
};
