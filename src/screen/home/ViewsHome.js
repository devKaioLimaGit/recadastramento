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
        order: [['createdAt', 'ASC']] // mantemos a ordem
    });

    const availableAppointments = [];

    for (let appt of appointments) {
        // conta quantas vagas já foram usadas com base no userid
        const used = appt.userid ? 1 : 0;
        const remaining = appt.wave - used;

        if (remaining > 0) {
            availableAppointments.push({
                ...appt.toJSON(),
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
