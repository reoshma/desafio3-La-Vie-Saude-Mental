const Pacientes = require("./pacientes");
const Psicologos = require("./psicologos");
const Atendimentos = require("./atendimentos");

/*Pacientes.belongsTo(Atendimentos, {
    foreignKey: "pacientes_id",
  });
  
  Atendimentos.hasMany(Pacientes, {
    foreignKey: "pacientes_id",
  });
  
  Psicologos.belongsTo(Atendimentos, {
    foreignKey: "psicologos_id",
  });
  
  Atendimentos.hasMany(Psicologos, {
    foreignKey: "psicologos_id",
  });

  Pacientes.belongsTo(psicologos, {
    foreignKey: "pacientes_id",
  });

  psicologos.hasMany(pacientes, {
    foreignKey: "pacientes_id",
  });*/
  
  module.exports = {
    Pacientes,
    Psicologos,
    Atendimentos
  };