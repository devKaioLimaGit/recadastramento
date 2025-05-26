const { Router } = require("express");
const ViewsHome = require("./screen/home/ViewsHome");
const ViewsAdmin = require("./screen/admin/ViewsAdmin");
const ViewsLowuser = require("./screen/lowuser/ViewsLowuser")
const CreateUsersController = require("./controllers/user/CreateUsersController");
const CreateUnitsController = require("./controllers/unit/CreateUnitController");
const UpdateUnitController = require("./controllers/unit/UpdateUnitController");
const UpdateUsersController = require("./controllers/user/UpdateUsersController");
const CreateAppointmesntController = require("./controllers/appointments/CreateAppointmesntController");
const CreateAdminController = require("./controllers/moderate/CreateModerateController");
const AuthenticateModerateController = require("./controllers/moderate/AuthenticateModerateController");
const { authenticateADM, authenticateAdminOrLowuser, authenticateLowuser } = require("./middlewares/adminAuth")
const router = Router();


router.get("/", ViewsHome.home);
router.post("/authenticate", AuthenticateModerateController.handler);
router.get("/login", ViewsHome.login);

//Agendamento Usuário:
router.post("/user", CreateUsersController.handler);


// Rotas ADM:
router.get("/admin", authenticateADM, ViewsAdmin.home);
router.get("/admin/appointment", authenticateADM, ViewsAdmin.appointment);





// Rotas Lowuser:
router.get("/lowuser", authenticateLowuser, ViewsLowuser.home);
router.get("/lowuser/forms", authenticateLowuser, ViewsLowuser.form);

//Rota de envio:



//Cria outros usúarios autenticados para o sistema:
router.post("/admin/moderator", authenticateADM, CreateAdminController.handler);


// Rota de criação da unidade:
router.post("/admin/unit/create", authenticateADM, CreateUnitsController.handler);

//Rota da atualização da unidade:
router.post("/admin/unit", authenticateADM, UpdateUnitController.handler);

//Rota do usuário comum logado:
router.post("/user/home", authenticateLowuser, UpdateUsersController.handler);


//Cria Agendamento
router.post("/admin/appointment", authenticateADM, CreateAppointmesntController.handler);


module.exports = router;