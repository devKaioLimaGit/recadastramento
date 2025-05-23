const Moderate = require("../../database/model/Moderate");
const { hash } = require("bcrypt");

class CreateAdminService {
    async execute({ name, email, password, role }) {
        const adminAlreadyExists = await Moderate.findOne({ where: { email } });

        if (adminAlreadyExists) {
            throw new Error("Moderador já cadastrado!");
        }

        const passwordHash = await hash(password, 10);

        const moderateService = await Moderate.create({
            name,
            email,
            password: passwordHash,
            role
        });

        return moderateService;
    }
}

module.exports = CreateAdminService;
