const express = require('express');
const router = express.Router();

var kpiquizController = require("../controllers/kpiquizController");

router.get("/media", function (req, res) {
    kpiquizController.buscarMedia(req, res);
});


module.exports = router;