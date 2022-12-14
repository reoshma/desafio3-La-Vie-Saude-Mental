const db = require("../database/connection");
const { DataTypes } = require("sequelize");

const Pacientes = db.define(
  "pacientes",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
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
