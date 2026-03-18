const express = require("express");

const router = express.Router();

const carrosController = require("../controllers/carros.controllers");

router.get("/carros", carrosController.listarCarros);
router.post("/carros", carrosController.cadastrarCarros);
router.put("/carros/:id", carrosController.atualizarCarros);
router.delete("/carro/:id", carrosController.deletarCarros);

module.exports = router;