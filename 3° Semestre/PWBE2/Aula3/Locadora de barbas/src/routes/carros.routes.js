const express = require("express");

const router = express.Router();

const carrosController = require("../controllers/carros.controllers");

router.get("/carros", carrosController.listarCarros);
router.post("/carro", carrosController.cadastrarCarros);
router.put("/carro", carrosController.atualizarCarros);
router.delete("/carro", carrosController.deletarCarros);

module.exports = router;