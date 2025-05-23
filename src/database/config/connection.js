const Sequelize = require("sequelize");

const connection = new Sequelize("postgresql://recadastramento_owner:npg_Om2UTohcCe6b@ep-calm-shadow-a5sksf8c-pooler.us-east-2.aws.neon.tech/recadastramento?sslmode=require", {
    host: "localhost",
    dialect: "postgresql",
    timezone: "-03:00",
    dialectOptions: {
        dateStrings: true,
        typeCast: function (field, next) {
            if (field.type === "DATETIME") {
                return field.string();
            }
            return next();
        }
    },
    define: {
        timestamps: true
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