const { Router } = require("express");
const ViewsHome = require("./screen/home/ViewsHome");
const ViewsAdmin = require("./screen/admin/ViewsAdmin");
const CreateUsersController = require("./controllers/user/CreateUsersController");
const CreateUnitsController = require("./controllers/unit/CreateUnitController");
const UpdateUnitController = require("./controllers/unit/UpdateUnitController");
const UpdateUsersController = require("./controllers/user/UpdateUsersController");
const CreateAppointmesntController = require("./controllers/appointments/CreateAppointmesntController");
const CreateAdminController = require("./controllers/moderate/CreateModerateController");
const AuthenticateModerateController = require("./controllers/moderate/AuthenticateModerateController");
const router = Router();


// Rota de talas
router.get("/", ViewsHome.home);
router.get("/admin", ViewsAdmin.home);
router.get("/login", ViewsHome.login);

// Rota de envio:
router.post("/user", CreateUsersController.handler);
router.post("/admin/moderator", CreateAdminController.handler);
router.post("/authenticate", AuthenticateModerateController.handler);
router.post("/unit", CreateUnitsController.handler);
router.post("/admin/unit", UpdateUnitController.handler);
router.post("/admin/user", UpdateUsersController.handler);
router.post("/admin/appointment", CreateAppointmesntController.handler);


module.exports = router;