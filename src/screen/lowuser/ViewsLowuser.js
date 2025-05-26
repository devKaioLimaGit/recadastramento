class ViewsLowuser {
    async home(req, res) {
        res.render("index.ejs")
    }
}


module.exports = new ViewsLowuser();   