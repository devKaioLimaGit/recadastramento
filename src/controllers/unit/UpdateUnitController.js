const UpdateUnitsService= require("../../services/unit/UpdateUnitService");

class UpdateUnitController {
    async handler(req, res) {
        try {
            const {unit, address } = req.body;
            const id = req.query.id;
            const updateUnitsService = new UpdateUnitsService();
            const unitService = await updateUnitsService.execute({ id, unit, address });

            res.status(200).json({message: unitService})
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    }
}


module.exports = new UpdateUnitController();