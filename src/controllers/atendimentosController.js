const { Atendimentos, Psicologos, Pacientes } = require("../models");

const atendimentosController = {
  listarAtendimento: async (req, res) => {
    const listaDeAtendimentos = await Atendimentos.findAll({
      include: Pacientes
    });

    res.json(listaDeAtendimentos);
  },

  async listarAtendimentoID (req, res) {
    const { id } = req.params;

    const listarUmAtendimento = await Atendimentos.findOne({
      where: {
        id,
      },
    });
    res.json(listarUmAtendimento);
  },

  async cadastrarAtendimento(req, res) {
    console.log(req.user);
    try {  
    const { data_atendimento, observacao, psicologos_id, pacientes_id } = req.body;

      const novoAtendimento = await Atendimentos.create({
        data_atendimento,
        observacao,
        pacientes_id,
      });

      res.status(201).json(novoAtendimento);
    } catch (err) {
      return res
        .status(500)
        .json("Erro ao tentar processar, contate o suporte");
    }
  },
  
};

module.exports = atendimentosController;