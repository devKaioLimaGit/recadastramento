const UpdateUsersService = require("../../services/user/UpdateUsersService");
class CreateUsersControllers {
    async handler(req, res) {
        try {
            const {
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
            } = req.body;

            const id = req.query.id;

            const updateUsersService = new UpdateUsersService();

            const userService = await updateUsersService.execute({
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
            });

            res.status(200).json({message: userService});
        } catch (error) {
            res.status(400).json({ error: error.message });

        }
    }
}

module.exports = new CreateUsersControllers();
