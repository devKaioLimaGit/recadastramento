const CreateUnitsService = require("../../services/unit/CreateUnitService");

class CreateUnitsController {
    async handler(req, res) {
        try {
            const { unit, address, capacity } = req.body;
            const createUnitsService = new CreateUnitsService();
            const unitService = await createUnitsService.execute({ unit, address, capacity });

            res.status(200).json(unitService)
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    }
}


module.exports = new CreateUnitsController();