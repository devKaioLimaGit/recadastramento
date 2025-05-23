const { Router } = require("express");
const ViewsHome = require("./screen/home/ViewsHome");
const ViewsAdmin = require("./screen/admin/ViewsAdmin");
const CreateUsersController = require("./controllers/user/CreateUsersController");
const CreateUnitsController = require("./controllers/unit/CreateUnitController");
const UpdateUnitController = require("./controllers/unit/UpdateUnitController");
const UpdateUsersController = require("./controllers/user/UpdateUsersController");
const router = Router();


// Rota de talas
router.get("/", ViewsHome.home);
router.get("/admin", ViewsAdmin.home);
router.get("/login", ViewsHome.login);





// Rota de envio:
router.post("/user", CreateUsersController.handler);
router.post("/admin/unit", UpdateUnitController.handler);
router.post("/place", CreateUnitsController.handler);
router.post("/admin/user", UpdateUsersController.handler);


module.exports = router;