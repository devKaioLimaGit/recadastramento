class ViewsAdmin {
    async home(req, res) {
        res.render("admin/index.ejs")
    }

    

}


module.exports = new ViewsAdmin();