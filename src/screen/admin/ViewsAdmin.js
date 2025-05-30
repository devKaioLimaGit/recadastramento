class ViewsAdmin {
    async home(req, res) {
        res.render("admin/index.ejs")
    }

    async appointment(req,res){
        res.render("admin/formsCreateAppointments.ejs")
    }
    async unit(req, res) {
        res.render("admin/unit.ejs")
    }
    

}


module.exports = new ViewsAdmin();