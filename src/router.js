const { Router } = require("express");
const ViewsHome = require("./screen/home/ViewsHome");
const ViewsHomeAdmin = require("./screen/admin/ViewsHomeAdmin");

const router = Router();

router.get("/", ViewsHome.home);
router.get("/admin/home", ViewsHomeAdmin.home)


module.exports = router;