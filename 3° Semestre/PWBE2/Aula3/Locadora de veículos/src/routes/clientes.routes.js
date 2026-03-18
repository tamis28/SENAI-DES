const express = require("express");

const router = express.Router();

const clientesController = require("../controllers/clientes.controllers");

router.get("/clientes", clientesController.listarClientes);
router.post("/cliente", clientesController.cadastrarClientes);
router.put("/cliente", clientesController.atualizarClientes);
router.delete("/cliente", clientesController.deletarClientes);

module.exports = router;