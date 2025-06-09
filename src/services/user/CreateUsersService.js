const Users = require("../../database/model/Users");
const Appointments = require("../../database/model/Appointments");
class CreateUsersService {
    async execute({
        name,
        socialname,
        cpf,
        birth,
        registration,
        gender,
        rg,
        organ,
        uf,
        civilstatus,
        education,
        mother,
        father,
        nationality,
        cityofbirth,
        birthplacestate,
        raceandcolor,
        email,
        tel,
        zip,
        address,
        housenumber,
        housecomplement,
        neighborhood,
        city,
        deficiency,
        availabletime,
        term
    }) {

        console.log(name,
            socialname,
            cpf,
            birth,
            registration,
            gender,
            rg,
            organ,
            uf,
            civilstatus,
            education,
            mother,
            father,
            nationality,
            cityofbirth,
            birthplacestate,
            raceandcolor,
            email,
            tel,
            zip,
            address,
            housenumber,
            housecomplement,
            neighborhood,
            city,
            deficiency,
            availabletime,
            term)

        const emailAlreadyExists = await Users.findOne({ where: { email: email } });
        const cpfAlreadyExists = await Users.findOne({ where: { cpf: cpf } });
        if (emailAlreadyExists || cpfAlreadyExists) {
            throw new Error("Usuário já cadastrado!");
        };

        const userService = await Users.create({
            name,
            socialname,
            cpf,
            birth,
            registration,
            gender,
            rg,
            organ,
            uf,
            civilstatus,
            education,
            mother,
            father,
            nationality,
            cityofbirth,
            birthplacestate,
            raceandcolor,
            email,
            tel,
            zip,
            address,
            housenumber,
            housecomplement,
            neighborhood,
            city,
            deficiency,
            term
        });


        console.log(userService.id)

        const appointments = await Appointments.update(
            { userid: userService.id, status: "Agendado..." },
            { where: { id: availabletime } }
        );


        console.log(appointments)

        return userService;
    }
}

module.exports = CreateUsersService;
