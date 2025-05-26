function authenticateADM(req, res, next) {
    if (req.session.user && req.session.user.role != undefined) {
        if (req.session.user.role === "lowuser") {
            return res.redirect("/login");
        } else if (req.session.user.role === "admin") {
            next();
        } else {
            return res.redirect("/login");
        }
    } else {
        res.redirect("/login");
    }
}


function authenticateLowuser(req, res, next) {
    if (req.session.user && req.session.user.role != undefined) {
        if (req.session.user.role === "lowuser") {
            next();
        } else if (req.session.user.role === "admin") {
            return res.redirect("/login");
        } else {
            return res.redirect("/login");
        }
    } else {
        res.redirect("/login");
    }
}

function authenticateAdminOrLowuser(req, res, next) {
    if (req.session.user && req.session.user.role != undefined) {
        if (req.session.user.role === "lowuser" || req.session.user.role === "admin") {
            next();
        } else {
            return res.redirect("/login");
        }
    } else {
        res.redirect("/login");
    }
}




module.exports = {
    authenticateADM,
    authenticateLowuser,
    authenticateAdminOrLowuser
};