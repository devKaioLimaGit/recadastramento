const AuthenticateModerateService = require("../../services/moderate/AuthenticateModerateService");

class AuthenticateModerateController {
    async handler(req, res) {
        try {
            const { email, password } = req.body;

            const authenticateModerateService = new AuthenticateModerateService();

            const user = await authenticateModerateService.execute({ email, password });

            req.session.user = user;

            if (req.session.user) {
                console.log("Sessão de usuário encontrada.");
            } else {
                console.log("Sessão de usuário não encontrada.");
            }

            if (req.session.user.role === 'admin') {
                res.redirect("/admin");
            } else if (req.session.user.role === 'lowuser') {
                res.redirect("/lowuser");
            } else {
                return res.status(403).send("Função de usuário inválida");
            }

        } catch (error) {
            console.error("Erro na autenticação:", error.message);
            return res.status(401).send(error.message);
        }
    }
}

module.exports = new AuthenticateModerateController();
