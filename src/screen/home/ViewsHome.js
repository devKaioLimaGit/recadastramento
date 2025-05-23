class ViewsHome {
    async home(req, res) {
        res.render("index.ejs")
    }

    async login(req, res) {
        res.render("login.ejs")
    }
}


module.exports = new ViewsHome();   