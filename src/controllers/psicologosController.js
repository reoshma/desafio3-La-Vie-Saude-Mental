const { Psicologos } = require("../models");
const bcrypt = require("bcryptjs");

const PsicologosController = {
  listarPsicologo: async (req, res) => {
    const listaDePsicologos = await Psicologos.findAll({
    });
    res.json(listaDePsicologos);
  },

  async listarPsicologoID(req, res) {
    const { id_psicologo } = req.params;

    const listarUmPsicologo = await Psicologos.findByPk(id_psicologo);

    res.json(listarUmPsicologo);
  },

  async cadastrarPsicologo(req, res) {
    const { nome, email, senha, apresentacao } = req.body;

    const newSenha = bcrypt.hashSync(senha, 10);

    const newUsuario = await Psicologos.create({ nome, email, senha: newSenha, apresentacao });

    return res.status(201).json(newUsuario);
  },

  async deletarPsicologo(req, res) {
    const { id_psicologo } = req.params;

    if (!id_psicologo) return res.status(404).json("id não encontrado");

    await Psicologos.destroy({
      where: {
        id_psicologo,
      },
    });
    res.json("Psicologo Deletado");
  },

  async atualizarPsicologo(req, res) {
    const { id_psicologo } = req.params;
    const { nome, email, senha, apresentacao } = req.body;

    const psicologoAtualizado = await Psicologos.update(
      {
        nome,
        email,
        senha,
        apresentacao
      },
      {
        where: {
          id_psicologo,
        },
      }
    );

    res.json("Psicologo Atualizado");
  },
};

module.exports = PsicologosController;