const { Psicologos } = require("../models/psicologos");
const bcrypt = require("bcryptjs");

const PsicologosController = {
  async registro(req, res) {
    const { nome, email, senha, apresentacao } = req.body;

    const newSenha = bcrypt.hashSync(senha, 10);

    const newUsuario = await Psicologos.create({ nome, email, senha: newSenha, apresentacao });

    return res.status(201).json(newUsuario);
  },
};

module.exports = PsicologosController;