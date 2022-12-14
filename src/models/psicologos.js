const db = require("../database/connection");
const { DataTypes } = require("sequelize");

const psicologos = db.define(
  "psicologos",
  {
    id: {
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
    senha: {
      type: DataTypes.STRING,
    },
    apresentacao: {
        type: DataTypes.STRING,
      },
  },
  {
    tableName: "psicologos",
    timestamps: false
  }
);

module.exports = psicologos;
