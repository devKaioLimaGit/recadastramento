const Appointments = require("../../database/model/Appointments");

class CreateAppointmesntService {
    async execute({ day, unitid, turn, status }) {
        // const appointmentsAlreadyExists = await Appointments.findOne({ where: { day: day } });

        // if (appointmentsAlreadyExists) {
        //     throw new Error("Já foi criado esse agendamento!");
        // }

        const appointmentsService = await Appointments.create({ day, unitid, turn });

        return appointmentsService;
    }
}

module.exports = CreateAppointmesntService;
