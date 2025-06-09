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
        const units = await Units.findAll();

        res.render("admin/formsCreateAppointments.ejs", { units })
    }
    async unit(req, res) {
        res.render("admin/unit.ejs")
    }


    async updatedata(req, res) {
        const id = req.params.id;
        console.log(id);
        const usuario = await Users.findByPk(id);
        if (!usuario) {
            console.log("Não achou o usuário");
            return res.status(404).send("Usuário não encontrado");
        } else {
            console.log("Usuário encontrado:", usuario);
        }
        res.render("admin/updatedata.ejs", { usuario }); // Passe o usuário para o template
    }

}


module.exports = new ViewsAdmin();