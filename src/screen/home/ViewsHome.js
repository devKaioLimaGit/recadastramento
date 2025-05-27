const Appointments = require("../../database/model/Appointments");
const Units = require("../../database/model/Units");

class ViewsHome {
    async home(req, res) {
        const appointment = await Appointments.findAll({
            include: [
                {
                    model:Units,
                    attributes: ['id', 'unit', 'address']
                }
            ]
        });
        
        res.render("index.ejs", { appointment });
    }

    async login(req, res) {
        res.render("login.ejs")
    }
}


module.exports = new ViewsHome();   