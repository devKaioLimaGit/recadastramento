const Users = require("../../database/model/Users");

class CreateUsersService {
    async execute({
        name,
        registration,
        cpf,
        birth,
        gender,
        rg,
        organ,
        uf,
        civilstatus,
        education,
        mother,
        nationality,
        cityofbirth,
        birthplacestate,
        email,
        tel,
        zip,
        address,
        housenumber,
        housecomplement,
        neighborhood,
        city,
        deficiency,
        photo,
        term
    }) {

        const emailAlreadyExists = await Users.findOne({ where: { email: email } });
        const cpfAlreadyExists = await Users.findOne({ where: { cpf: cpf } });
        if (emailAlreadyExists || cpfAlreadyExists) {
            throw new Error("Usuário já cadastado!");
        };

        const userService = await Users.create({
            name,
            registration,
            cpf,
            birth,
            gender,
            rg,
            organ,
            uf,
            civilstatus,
            education,
            mother,
            nationality,
            cityofbirth,
            birthplacestate,
            email,
            tel,
            zip,
            address,
            housenumber,
            housecomplement,
            neighborhood,
            city,
            deficiency,
            photo,
            term
        });

        return userService;
    }
}

module.exports =  CreateUsersService;
