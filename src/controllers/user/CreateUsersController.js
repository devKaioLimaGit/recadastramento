const CreateUsersService = require("../../services/user/CreateUsersService");
class CreateUsersControllers {
    async handler(req, res) {
        try {
            const {
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
                term,
            } = req.body;

            const createUsersService = new CreateUsersService();

            const userService = await createUsersService.execute({
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
            });

            res.status(200).json(userService);
        } catch (error) {
            res.status(400).json({ error: error.message });

        }
    }
}

module.exports = new CreateUsersControllers();
