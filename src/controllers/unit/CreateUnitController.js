const CreateUnitsServices = require("../../services/unit/CreateUnitServices");

class CreateUnitsController {
    async handler(req, res) {
        try {
            const { unit, address, capacity } = req.body;
            const createUnitsServices = new CreateUnitsServices();
            const unitService = await createUnitsServices.execute({ unit, address, capacity });

            res.status(200).json(unitService)
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    }
}


module.exports = new CreateUnitsController();