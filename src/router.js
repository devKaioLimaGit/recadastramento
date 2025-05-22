const { Router } = require("express");
const ViewsHome = require("./screen/home/ViewsHome");

const router = Router();

router.get("/", ViewsHome.home);


module.exports = router;