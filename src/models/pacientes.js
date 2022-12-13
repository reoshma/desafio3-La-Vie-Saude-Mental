const db = require("../database/connection");
const { DataTypes } = require("sequelize");

const Pacientes = db.define(
  "Pacientes",
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
    idade: {
        type: DataTypes.DATE,
      },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "pacientes",
  }
);

module.exports = Pacientes;
