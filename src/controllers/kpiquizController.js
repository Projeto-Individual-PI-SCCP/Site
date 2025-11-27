const kpiquizModel = require("../models/kpiquizModel");

function buscarMedia(req, res) {
    kpiquizModel.buscarMedia().then(resultado => {
            if (resultado.length > 0) {
                const mediaAcertos = resultado[0].mediaAcertos;
                
                res.status(200).json({
                    mediaAcertos: mediaAcertos
                });
            } else {
                res.status(200).json({ mediaAcertos: "0.00" });
            }
        })
        .catch(erro => {
            console.error("Erro ao buscar média de acertos:", erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    buscarMedia
};
