class ViewsLowuser {
    async home(req, res) {
        res.render("lowuser/index.ejs")
    }

    async form(req,res){
        res.render("lowuser/forms.ejs")
    }
}


module.exports = new ViewsLowuser();   