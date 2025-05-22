const Sequelize = require("sequelize");

const sequelize = new Sequelize("recadastramento", "root", "12345678", {
    host: "localhost",
    dialect: "mysql",
    timezone: "-03:00", // Recife (UTC-3)
    dialectOptions: {
        dateStrings: true, // força as datas como strings
        typeCast: function (field, next) {
            // Corrige o tipo de campo DATETIME para retornar como string
            if (field.type === "DATETIME") {
                return field.string();
            }
            return next();
        }
    },
    define: {
        timestamps: true // ativa createdAt e updatedAt
    },
    logging: false
});



sequelize.authenticate()
    .then(() => {
        console.log("Banco de dados conectado com sucesso!");
    })
    .catch((error) => {
        console.error("Erro ao conectar com o banco de dados:", error);
    });
