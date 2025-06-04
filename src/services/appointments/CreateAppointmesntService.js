const Appointments = require("../../database/model/Appointments");

class CreateAppointmesntService {
    async execute({ day, unitid, turn, status, wave }) {
        // const appointmentsAlreadyExists = await Appointments.findOne({ where: { day: day } });

        // if (appointmentsAlreadyExists) {
        //     throw new Error("Já foi criado esse agendamento!");
        // }

        const createdAppointments = [];
        for (let i = 0; i < wave; i++) {
            const appointment = await Appointments.create({ day, unitid, turn, wave });
            createdAppointments.push(appointment);
        }
        return createdAppointments;



    }
}

module.exports = CreateAppointmesntService;
