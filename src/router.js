const { Router } = require("express");
const ViewsHome = require("./screen/home/ViewsHome");
const ViewsHomeAdmin = require("./screen/admin/ViewsHomeAdmin");
const CreateUsersControllers = require("./controllers/user/CreateUsersControllers");
const CreateUnitsController = require("./controllers/unit/CreateUnitController");
const router = Router();

router.get("/", ViewsHome.home);
router.get("/admin/home", ViewsHomeAdmin.home);
router.post("/user", CreateUsersControllers.handler);
router.post("/place", CreateUnitsController.handler);


module.exports = router;