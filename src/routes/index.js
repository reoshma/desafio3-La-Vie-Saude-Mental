const express = require("express");
const pacientesController = require("../controllers/pacientesController");
const psicologosController = require("../controllers/psicologosController");
const atendimentosController = require("../controllers/atendimentosController");
const authController = require("../controllers/authController");
const requestLog = require("../middlewares/requestLog");
const bloqueio = require("../middlewares/bloqueio");

const usuarioCreateValidation = require("../validations/usuarios/create");
const authLoginValidation = require("../validations/auth/login");
const auth = require("../middlewares/auth");

const routes = express.Router();

routes.get("/pacientes", pacientesController.listarPaciente);
routes.post("/pacientes", pacientesController.cadastrarPaciente);
routes.delete("/pacientes/:id", pacientesController.deletarPaciente);
routes.put("/pacientes/:id", pacientesController.atualizarPaciente);

routes.get("/psicologos");
routes.post("/psicologos", psicologosController.registro);
routes.delete("/psicologos/:id",);
routes.put("/psicologos/:id",);

routes.get("/atendimentos");
routes.post("/atendimentos");
routes.delete("/atendimentos/:id",);
routes.put("/atendimentos/:id",);

//routes.post("/usuarios", usuarioCreateValidation, usuariosController.registro);
//routes.post("/login", authLoginValidation, authController.login);

module.exports = routes;
