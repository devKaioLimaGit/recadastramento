const Moderate = require("../../database/model/Moderate");
const { hash } = require("bcrypt");

class CreateAdminService {
    async execute({ name, email, cpf, password, role }) {
        const adminAlreadyExists = await Moderate.findOne({ where: { cpf:cpf } });

        if (adminAlreadyExists) {
            throw new Error("Moderador já cadastrado!");
        }

        const passwordHash = await hash(password, 10);

        const moderateService = await Moderate.create({
            name,
            email,
            cpf,
            password: passwordHash,
            role
        });

        return moderateService;
    }
}

module.exports = CreateAdminService;
