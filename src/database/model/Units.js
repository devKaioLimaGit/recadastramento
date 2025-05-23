const { DataTypes } = require("sequelize");
const connection = require("../config/connection");

const Units = connection.define("units", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },

    unit: {
        type: DataTypes.STRING(191),
        allowNull: false,
    },

    address: {
        type: DataTypes.STRING(191),
        allowNull: false,
    },

    capacity: {
        type: DataTypes.STRING(191),
        allowNull: false,
    },



}, {
    tableName: "units",
    timestamps: true,
});

Units.sync({ force: false });


module.exports = Units;
