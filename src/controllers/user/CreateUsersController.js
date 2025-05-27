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
                availabletime,
                term
            } = req.body;

            const createUsersService = new CreateUsersService();

            const userService = await createUsersService.execute({
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
            });

            res.status(200).json(userService);
        } catch (error) {
            res.status(400).json({ error: error.message });

        }
    }
}

module.exports = new CreateUsersControllers();
