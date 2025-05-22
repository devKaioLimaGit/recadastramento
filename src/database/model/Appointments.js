const { DataTypes } = require("sequelize");
const connection = require("../config/connection");

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

module.exports = Appointments;
