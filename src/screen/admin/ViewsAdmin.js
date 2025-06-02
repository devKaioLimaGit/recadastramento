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

    
    async updatedata(req, res) {
        const id = req.params;
          const usuario = await Users.findByPk("fbea11d1-364f-42d2-8f1b-b4d8cec86d96");
          if(!usuario){
            console.log("não achou")
          }else{
            console.log("achou")
          }
        console.log(usuario)
        res.render("admin/updatedata.ejs")
    }


}


module.exports = new ViewsAdmin();