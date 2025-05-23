const { Router } = require("express");
const ViewsHome = require("./screen/home/ViewsHome");
const ViewsAdmin = require("./screen/admin/ViewsAdmin");
const CreateUsersControllers = require("./controllers/user/CreateUsersControllers");
const CreateUnitsController = require("./controllers/unit/CreateUnitController");
const router = Router();

router.get("/", ViewsHome.home);
router.get("/admin/home", ViewsAdmin.home);
router.get("/login", ViewsHome.login);
router.post("/user", CreateUsersControllers.handler);
router.post("/place", CreateUnitsController.handler);


module.exports = router;