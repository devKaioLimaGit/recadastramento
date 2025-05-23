const { DataTypes } = require("sequelize");
const connection = require("../config/connection");

const Moderate = connection.define("moderators", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING(191),
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING(191),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    role: {
        type: DataTypes.STRING(191),
        allowNull: false,
    }

}, {
    tableName: "moderators",
    timestamps: true,
});

Moderate.sync({ force: false });

module.exports = Moderate;
