const { Pacientes }  = require("../models");

const pacientesController = {
  listarPaciente: async (req, res) => {
    const listaDePacientes = await Pacientes.findAll({
    });
    res.json(listaDePacientes);
  },
  async listarPacienteID (req, res) {
    const { id_paciente } = req.params;

    const listarUmPaciente = await Pacientes.findOne({
      where: {
        id_paciente:id_paciente,
      },
    });
    res.json(listarUmPaciente);
  },

  async cadastrarPaciente(req, res) {
    try {  
    const { nome, email, idade } = req.body;

      const novoPaciente = await Pacientes.create({
        nome,
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
    const { id_paciente } = req.params;

    if (!id_paciente) return res.status(404).json("id não encontrado");

    await Pacientes.destroy({
      where: {
        id_paciente:id_paciente,
      },
    });

    res.json("Paciente Deletado");
  },

  async atualizarPaciente(req, res) {
    const { id_paciente } = req.params;
    const { nome, email, idade } = req.body;

    const pacienteAtualizado = await Pacientes.update(
      {
        nome,
        email,
        idade,
      },
      {
        where: {
          id_paciente:id_paciente,
        },
      }
    );

    res.json("Paciente Atualizado");
  },
};

module.exports = pacientesController;