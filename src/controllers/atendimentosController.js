const { Atendimentos, Psicologos, Pacientes } = require("../models");

const atendimentosController = {
  listarAtendimento: async (req, res) => {
    const listaDeAtendimentos = await Atendimentos.findAll({
    });

    res.json(listaDeAtendimentos);
  },

  async cadastrarAtendimento(req, res) {
    try {  
    const { data_atendimento, observacao, psicologos_id, pacientes_id } = req.body;

      const novoAtendimento = await Atendimentos.create({
        data_atendimento,
        observacao,
        psicologos_id,
        pacientes_id,
      });
      res.status(201).json(novoAtendimento);
    } catch (err) {
      return res
        .status(500)
        .json("Erro ao tentar processar, contate o suporte");
    }
  },
  
  async deletarAtendimento(req, res) {
    const { id } = req.params;

    await Atendimentos.destroy({
      where: {
        id,
      },
    });

    res.json("Atendimento Deletado");
  },

  async atualizarAtendimento(req, res) {
    const { id } = req.params;
    const { data_atendimento, observacao, psicologos_id, pacientes_id } = req.body;

    const atendimentoAtualizado = await Atendimentos.update(
      {
        data_atendimento,
        observacao,
        psicologos_id,
        pacientes_id,
      },
      {
        where: {
          id,
        },
      }
    );

    res.json("Atendimento Atualizado");
  },
};

module.exports = atendimentosController;