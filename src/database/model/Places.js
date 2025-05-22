const { DataTypes } = require("DataTypes");
const connection = require("../config/connection");

const Places = connection.define("places", {
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

    birth: {
        type: DataTypes.STRING(191),
        allowNull: false,
    },
    


}, {
    tableName: "places", 
    timestamps: true,
});

module.exports = Users;
