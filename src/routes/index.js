const express = require("express");
const pacientesController = require("../controllers/pacientesController");
const psicologosController = require("../controllers/psicologosController");
const atendimentosController = require("../controllers/atendimentosController");
const authController = require("../controllers/authController");
const requestLog = require("../middlewares/requestLog");
const bloqueio = require("../middlewares/bloqueio");
const usuarioCreateValidation = require("../validations/usuarios/create");
const pacienteCreateValidation = require("../validations/usuarios/pacientes");
const authLoginValidation = require("../validations/auth/login");
const auth = require("../middlewares/auth");

const routes = express.Router();

routes.get("/pacientes", pacientesController.listarPaciente);
routes.get("/pacientes/:id", pacientesController.listarPacienteID);
routes.post("/pacientes", pacienteCreateValidation, pacientesController.cadastrarPaciente);
routes.delete("/pacientes/:id", pacientesController.deletarPaciente);
routes.put("/pacientes/:id", pacienteCreateValidation, pacientesController.atualizarPaciente);

routes.get("/psicologos", psicologosController.listarPsicologo);
routes.get("/psicologos/:id", psicologosController.listarPsicologoID);
routes.post("/psicologos", usuarioCreateValidation, psicologosController.cadastrarPsicologo);
routes.delete("/psicologos/:id_psicologo", psicologosController.deletarPsicologo);
routes.put("/psicologos/:id_psicologo", usuarioCreateValidation, psicologosController.atualizarPsicologo);

routes.get("/atendimentos", atendimentosController.listarAtendimento);
routes.get("/atendimentos/:id", atendimentosController.listarAtendimentoID);
routes.post("/atendimentos", atendimentosController.cadastrarAtendimento);

routes.post("/login", authLoginValidation, authController.login);

module.exports = routes;
