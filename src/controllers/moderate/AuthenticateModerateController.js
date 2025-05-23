const AuthenticateModerateService = require("../../services/moderate/AuthenticateModerateService");

class AuthenticateModerateController {
    async handler(req, res) {
        try {
            const { email, password } = req.body;

            const authenticateModerateService = new AuthenticateModerateService();

            const user = await authenticateModerateService.execute({ email, password });

            req.session.user = user;
            
            res.status(200).json(user)

        } catch (error) {
            console.error("Erro na autenticação:", error.message);
            return res.status(401).send(error.message);
        }
    }
}

module.exports = new AuthenticateModerateController();
