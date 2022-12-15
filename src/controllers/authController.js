const { Psicologos } = require("../models");
const jwt = require("jsonwebtoken");
const secret = require("../configs/secret");
const bcrypt = require("bcryptjs");

const AuthController = {
  async login(req, res) {
    const { email, senha } = req.body;

    const usuario = await Psicologos.findOne({
      where: {
        email,
      },
    });

    if (!usuario) {
      return res.status(400).json("E-mail não cadastrado!”");
    }

    if (!bcrypt.compareSync(senha, usuario.senha)) {
      return res.status(401).json("E-mail ou senha inválido, verifique e tente novamente”");
    }

    const token = jwt.sign(
      {
        id: usuario.id_psicologo,
        email: usuario.email,
        nome: usuario.nome,
        userType: 'user'
      },
      secret.key
    );

    return res.status(200).json(token);
  },
};

module.exports = AuthController;