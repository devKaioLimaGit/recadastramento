const { Op } = require("sequelize");
const Appointments = require("../../database/model/Appointments");
const Units = require("../../database/model/Units");

class ViewsHome {
    async home(req, res) {
        const appointments = await Appointments.findAll({
            include: [
                {
                    model: Units,
                    attributes: ['id', 'unit', 'address']
                }
            ],
            order: [['createdAt', 'ASC']] // Importante: garante a ordem de prioridade
        });

        const groupedAppointments = {};

        for (let appt of appointments) {
            const key = `${appt.day}-${appt.unitid}-${appt.turn}`;

            if (!groupedAppointments[key]) {
                groupedAppointments[key] = {
                    ...appt.toJSON(),
                    used: 0
                };
            }

            if (appt.userid) {
                groupedAppointments[key].used += 1;
            }
        }

        const availableAppointments = [];

        for (let key in groupedAppointments) {
            const item = groupedAppointments[key];
            const remaining = item.wave - item.used;

            if (remaining > 0) {
                availableAppointments.push({
                    ...item,
                    remaining
                });
            }
        }

        res.render("index.ejs", { appointment: availableAppointments });
    }

    async login(req, res) {
        res.render("login.ejs");
    }

    async successo(req, res) {
        res.render("successo.ejs");
    }
}

module.exports = new ViewsHome();
