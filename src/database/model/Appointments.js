const { DataTypes } = require("sequelize");
const connection = require("../config/connection");
const Users = require("./Users");
const Units = require("./Units");

const Appointments = connection.define("appointments", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },

    day: {
        type: DataTypes.STRING(191),
        allowNull: false,
    },

    unitid: {
        type: DataTypes.UUID,
        allowNull: false,
    },

    userid: {
        type: DataTypes.UUID,
        allowNull: false,
    },

    status: {
        type: DataTypes.STRING(191),
        allowNull: false,
    },

}, {
    tableName: "appointments",
    timestamps: true,
});


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


Appointments.sync({ force: true });

module.exports = Appointments


