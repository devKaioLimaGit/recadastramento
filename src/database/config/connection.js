const Sequelize = require("sequelize");

const connection = new Sequelize("postgresql://recadastramento_owner:npg_Om2UTohcCe6b@ep-calm-shadow-a5sksf8c-pooler.us-east-2.aws.neon.tech/recadastramento?sslmode=require", {
    host: "localhost",
    dialect: "postgresql",
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



connection.authenticate()
    .then(() => {
        console.log("Banco de dados conectado com sucesso!");
    })
    .catch((error) => {
        console.error("Erro ao conectar com o banco de dados:", error);
    });


module.exports = connection;