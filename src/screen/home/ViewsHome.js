class ViewsHome {
    async home(req, res) {
        res.render("index.ejs")
    }
}


module.exports = new ViewsHome();