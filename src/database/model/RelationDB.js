const createTables = require("../config/connection");
const Appointments = require("./Appointments");
const Users = require("./Users");
const Units = require("./Units");

// Relação 1:1 entre Users e Appointments (um usuário só pode ter 1 agendamento)
Users.hasOne(Appointments, {
  foreignKey: "userid",
  onDelete: "CASCADE",
});
Appointments.belongsTo(Users, {
  foreignKey: "userid",
});

// Relação 1:N entre Units e Appointments (uma unidade pode ter vários agendamentos)
Units.hasMany(Appointments, {
  foreignKey: "unitid",
  onDelete: "CASCADE",
});
Appointments.belongsTo(Units, {
  foreignKey: "unitid",
});

createTables.sync({ alter: true }).then(() => {
  console.log("Modelos sincronizados com o banco de dados.");
});

// Exportando os modelos
module.exports = {
  createTables,
  Appointments,
  Users,
  Units,
};
