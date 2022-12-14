const db = require("../database/connection");
const { DataTypes } = require("sequelize");
const Atendimentos = require('./atendimentos')

const Pacientes = db.define(
  "pacientes",
  {
    id_paciente: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    idade: {
      type: DataTypes.DATE,
    },
    },
  {
    tableName: "pacientes",
    timestamps: false,
  }
);

module.exports = Pacientes;
