const db = require("../database");
const { DataTypes } = require("sequelize");

const Atendimentos = db.define(
  "Atendimentos",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    data_atendimento: {
      type: DataTypes.DATE,
    },
    observacao: {
      type: DataTypes.STRING,
    },
    psicologos_id: {
      type: DataTypes.INTEGER,
    },
    pacientes_id: {
        type: DataTypes.INTEGER,
      },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "atendimentos",
  }
);

module.exports = Atendimentos;
