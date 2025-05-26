const { compare } = require("bcrypt");
const Moderate = require("../../database/model/Moderate");

class AuthenticateModerateService {
    async execute({ email, password }) {
        // Buscar o moderador pelo e-mail
        console.log(email)
        const moderate = await Moderate.findOne({ where: { email:email } });

        if (!moderate) {
            throw new Error("Usuário e senhas incorretos");
        }

        // Comparar a senha
        const isPasswordValid = await compare(password, moderate.password);

        if (!isPasswordValid) {
            throw new Error("Usuário e senhas incorretos");
        }



        // Retornar os dados do usuário autenticado
        return {
            id: moderate.id,
            name: moderate.name,
            role: moderate.role,
        };
    }
}

module.exports = AuthenticateModerateService;
