const CreateUnitsService = require("../../services/unit/CreateUnitService");

class CreateUnitsController {
    async handler(req, res) {
        try {
            const { unit, address } = req.body;
            const createUnitsService = new CreateUnitsService();
            const unitService = await createUnitsService.execute({ unit, address });

            res.render("admin/sucess.ejs")
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    }
}


module.exports = new CreateUnitsController();