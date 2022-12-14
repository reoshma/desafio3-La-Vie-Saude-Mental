const { Psicologos } = require("../models");
const bcrypt = require("bcryptjs");

const PsicologosController = {
  listarPsicologo: async (req, res) => {
    const listaDePsicologos = await Psicologos.findAll({
    });
    res.json(listaDePsicologos);
  },

  async cadastrarPsicologo(req, res) {
    const { nome, email, senha, apresentacao } = req.body;

    const newSenha = bcrypt.hashSync(senha, 10);

    const newUsuario = await Psicologos.create({ nome, email, senha: newSenha, apresentacao });

    return res.status(201).json(newUsuario);
  },

  async deletarPsicologo(req, res) {
    const { id } = req.params;

    await Psicologos.destroy({
      where: {
        id,
      },
    });

    res.json("Psicologo Deletado");
  },

  async atualizarPsicologo(req, res) {
    const { id } = req.params;
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
          id,
        },
      }
    );

    res.json("Psicologo Atualizado");
  },
};

module.exports = PsicologosController;