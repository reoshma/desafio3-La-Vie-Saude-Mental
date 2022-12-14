const { Pacientes}  = require("../models");

const pacientesController = {
  listarPaciente: async (req, res) => {
    const listaDePacientes = await Pacientes.findAll({
    });

    res.json(listaDePacientes);
  },

  async cadastrarPaciente(req, res) {
    try {  
    const { name, email, idade } = req.body;

      const novoPaciente = await Pacientes.create({
        name,
        email,
        idade
      });
      res.status(201).json(novoPaciente);
    } catch (err) {
      return res
        .status(500)
        .json("Erro ao tentar processar, contate o suporte");
    }
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
    const { name, email, idade } = req.body;

    const pacienteAtualizado = await Pacientes.update(
      {
        name,
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