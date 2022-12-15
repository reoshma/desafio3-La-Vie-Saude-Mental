const { Atendimentos, Psicologos, Pacientes } = require("../models");

const atendimentosController = {
  listarAtendimento: async (req, res) => {
    try {
      const listaDeAtendimentos = await Atendimentos.findAll({
        include: [{
          model: Pacientes,
        },
        {
          model: Psicologos,
          attributes: { exclude: ['senha'] }
        }]
      });
      return res.status(200).json(listaDeAtendimentos);
    } catch {
      return res.status(404).json('Lista não encontrada')
    }
  },

  async listarAtendimentoID(req, res) {
    try {
      const { id } = req.params;
      const listarUmAtendimento = await Atendimentos.findByPk(id, {
        include: [{
          model: Pacientes,
        },
        {
          model: Psicologos,
          attributes: { exclude: ['senha'] }
        }]
      });
      res.status(200).json(listarUmAtendimento);
    } catch {
      return res.status(404).json('Id não encontrado')
    }
  },

  async cadastrarAtendimento(req, res) {
    console.log(req.usuario);
    try {
      const { data_atendimento, observacao, id_psicologo, id_paciente } = req.body;
      const novoAtendimento = await Atendimentos.create({
        data_atendimento,
        observacao,
        id_psicologo,
        id_paciente,
      });

      res.status(201).json(novoAtendimento);

    } catch {
      return res.status(400).json("Erro ao tentar processar, contate o suporte");
    }
  },

  async deletarAtendimento(req, res) {
    try {
      const { id } = req.params;

      await Atendimentos.destroy({ where: { id } });

      return res.status(204).json("Atendimento Deletado");

    } catch {
      return res.status(404).json("Erro ao tentar processar, contate o suporte")
    };
  }


};

module.exports = atendimentosController;