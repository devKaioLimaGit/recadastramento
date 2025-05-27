const CreateAdminService = require("../../services/moderate/CreateModerateService");
class CreateModerateController {
    async handler(req, res) {
        try {
            const {
                name,
                email,
                cpf,
                password,
                role,
            } = req.body;

            const createAdminService = new CreateAdminService();

            const moderateService = await createAdminService.execute({
                name,
                email,
                cpf,
                password,
                role
            });

            res.status(200).json(moderateService);
        } catch (error) {
            res.status(400).json({ error: error.message });

        }
    }
}

module.exports = new CreateModerateController();
