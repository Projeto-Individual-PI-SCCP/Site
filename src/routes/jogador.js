const express = require('express');
const router = express.Router();

var jogadorController = require("../controllers/jogadorController");

router.get("/favorito", function (req, res) {
    jogadorController.buscarJogadorFavorito(req, res);
});


module.exports = router;