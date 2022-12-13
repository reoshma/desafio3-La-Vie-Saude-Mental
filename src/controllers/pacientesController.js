const { Pacientes } = require("../models/pacientes");
const bcrypt = require("bcryptjs");

const pacientesController = {
  listarPaciente: async (req, res) => {
    const listaDePacientes = await Pacientes.findAll({
    });

    res.json(listaDePacientes);
  },

  async cadastrarPaciente(req, res) {
    const { nome, email, idade } = req.body;

    const novoPaciente = await Pacientes.create({
      nome,
      email,
      idade,
    });

    res.json(novoPaciente);
  },

  async deletarPaciente(req, res) {
    const { id } = req.params;

    await Pacientes.destroy({
      where: {
        id,
      },
    });

    res.json("Paciente Deletado");
  },

  async atualizarPaciente(req, res) {
    const { id } = req.params;
    const { nome, email, idade } = req.body;

    const pacienteAtualizado = await Pacientes.update(
      {
        nome,
        email,
        idade,
      },
      {
        where: {
          id,
        },
      }
    );

    res.json("Paciente Atualizado");
  },
};

module.exports = pacientesController;