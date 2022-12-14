const Psicologos = require("./psicologos");
const Atendimentos = require("./atendimentos");
const Pacientes = require("./pacientes");


Atendimentos.hasMany(Pacientes,{
  foreignKey: "id_paciente"
});

Pacientes.belongsTo(Atendimentos, {
  foreignKey: "id_paciente"
});

Atendimentos.hasMany(Psicologos, {
  foreignKey: "id_psicologo"
});

Psicologos.belongsTo(Atendimentos, {
  foreignKey: "id_psicologo"
});

  
  module.exports = {
    Psicologos,
    Atendimentos,
    Pacientes
  };