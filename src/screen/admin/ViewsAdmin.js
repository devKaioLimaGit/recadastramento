const Appointments = require("../../database/model/Appointments")
const Units = require("../../database/model/Units");
const Users = require("../../database/model/Users");
class ViewsAdmin {
async home(req, res) {
    const appointment = await Appointments.findAll({
        include: [
            {
                model: Units,
                attributes: ['id', 'unit', 'address']
            },
            {
                model: Users,
                attributes: [
                    'id', 'registration', 'name', 'birth', 'email',
                    'cpf', 'tel', 'city', 'deficiency'
                ]
            }
        ]
    });

    res.render("admin/index.ejs", { appointment });
}


    async appointment(req, res) {
        res.render("admin/formsCreateAppointments.ejs")
    }
    async unit(req, res) {
        res.render("admin/unit.ejs")
    }


}


module.exports = new ViewsAdmin();