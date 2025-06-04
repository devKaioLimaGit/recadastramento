const CreateAppointmesntService = require("../../services/appointments/CreateAppointmesntService");

class CreateAppointmesntController {
    async handler(req, res) {
        try {
            const { day, unitid, turn, status, wave } = req.body;
            const createAppointmesntService = new CreateAppointmesntService();
            const unitService = await createAppointmesntService.execute({ day, unitid, turn, status, wave });

            res.render("sucessAppointments.ejs")

        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    }
}


module.exports = new CreateAppointmesntController;