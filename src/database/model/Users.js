const { DataTypes } = require("sequelize");
const connection = require("../config/connection");

const Users = connection.define("users", {
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


    socialname: {
        type: DataTypes.STRING(191),
        allowNull: false,
    },

    father: {
        type: DataTypes.STRING(191),
        allowNull: false,
    },

    registration: {
        type: DataTypes.STRING(191),
        allowNull: false,
    },

    cpf: {
        type: DataTypes.STRING(191),
        allowNull: false,
    },

    birth: {
        type: DataTypes.STRING(191),
        allowNull: false,
    },

    gender: {
        type: DataTypes.STRING(191),
        allowNull: false,
    },

    rg: {
        type: DataTypes.STRING(191),
        allowNull: false,
    },

    organ: {
        type: DataTypes.STRING(191),
        allowNull: false,
    },
    raceandcolor: {
        type: DataTypes.STRING(191),
        allowNull: false,
    },
    uf: {
        type: DataTypes.STRING(191),
        allowNull: false,
    },

    civilstatus: {
        type: DataTypes.STRING(191),
        allowNull: false,
    },

    education: {
        type: DataTypes.STRING(191),
        allowNull: false,
    },

    mother: {
        type: DataTypes.STRING(191),
        allowNull: false,
    },

    nationality: {
        type: DataTypes.STRING(191),
        allowNull: false,
    },

    cityofbirth: {
        type: DataTypes.STRING(191),
        allowNull: false,
    },

    birthplacestate: {
        type: DataTypes.STRING(191),
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING(191),
        allowNull: false,
        unique: true,
    },

    tel: {
        type: DataTypes.STRING(191),
        allowNull: false,
    },

    zip: {
        type: DataTypes.STRING(191),
        allowNull: false,
    },

    address: {
        type: DataTypes.STRING(191),
        allowNull: false,
    },

    housenumber: {
        type: DataTypes.STRING(191),
        allowNull: false,
    },

    housecomplement: {
        type: DataTypes.STRING(191),
        allowNull: true,
    },

    neighborhood: {
        type: DataTypes.STRING(191),
        allowNull: false,
    },

    city: {
        type: DataTypes.STRING(191),
        allowNull: false,
    },

    deficiency: {
        type: DataTypes.STRING(191),
        allowNull: false,
    },

    term: {
        type: DataTypes.STRING(191),
        allowNull: false,
    },

}, {
    tableName: "users",
    timestamps: true,
});

Users.sync({ force: false });

module.exports = Users;
