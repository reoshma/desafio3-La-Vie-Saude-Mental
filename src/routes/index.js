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

routes.get("/psicologos", psicologosController.listarPsicologo);
routes.post("/psicologos", psicologosController.cadastrarPsicologo);
routes.delete("/psicologos/:id", psicologosController.deletarPsicologo);
routes.put("/psicologos/:id", psicologosController.atualizarPsicologo);

routes.get("/atendimentos", atendimentosController.listarAtendimento);
routes.post("/atendimentos", atendimentosController.cadastrarAtendimento);
routes.delete("/atendimentos/:id", atendimentosController.deletarAtendimento);
routes.put("/atendimentos/:id", atendimentosController.atualizarAtendimento);

//routes.post("/usuarios", usuarioCreateValidation, usuariosController.registro);
//routes.post("/login", authLoginValidation, authController.login);

module.exports = routes;
