const { Pacientes } = require("../models");


const pacientesController = {
  listarPaciente: async (req, res) => {
    try {
      const listaDePacientes = await Pacientes.findAll({
      });
      res.status(200).json(listaDePacientes);
    } catch {
      return res.status(404).json("Erro ao tentar processar, contate o suporte");
    }
  },
  async listarPacienteID(req, res) {
    try {
      const { id } = req.params;
      const paciente = await Pacientes.findByPk(id);
      res.status(200).json(paciente);
    } catch {
      return res.status(404).json("Id não encontrado");
    }},

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
      return res.status(400).json("Erro ao tentar processar, contate o suporte");
    }
  },

  async deletarPaciente(req, res) {
    try {
      const { id } = req.params;
      await Pacientes.destroy({
        where: {
          id_paciente: id,
        },
      });
      if (!id) return res.status(404).json("id não encontrado");
      res.status(204).json("Paciente Deletado");
    } catch {
      return res.status(404).json("Id não encontrado")
    }
  },

  async atualizarPaciente(req, res) {
    try {
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
            id_paciente: id,
          },
        }
      );
      res.status(200).json('Paciente atualizado');
    } catch {
      res.status(400);
    }
  },
};

module.exports = pacientesController;