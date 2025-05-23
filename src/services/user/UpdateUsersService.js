
const Users = require("../../database/model/Users");

class UpdateUsersService {
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
        term,
        id
    }) {

        try {
            const userService = await Users.update({
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
            }, { where: { id: id } });

            return "Dados do usuário atualizados!";
        } catch (error) {
            throw new Error("Erro ao atualizar dados do usuário!" + error)
        }

    }
}

module.exports = UpdateUsersService;
