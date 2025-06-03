const Appointments = require("../../database/model/Appointments");

class CreateAppointmesntService {
    async execute({ day, unitid, turn, status, wave }) {
        const appointmentsAlreadyExists = await Appointments.findOne({ where: { day: day } });

        if (appointmentsAlreadyExists) {
            throw new Error("Já foi criado esse agendamento!");
        }

        const appointmentsService = await Appointments.create({ day, unitid, turn, wave });

        return appointmentsService;
    }
}

module.exports = CreateAppointmesntService;
