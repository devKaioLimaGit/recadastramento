const Appointments = require("./database/model/Appointments")
const Units = require("./database/model/Units");

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
router.get("/admin/unit", authenticateADM, authenticateADM, ViewsAdmin.unit);

//Agendamento Usuário:
router.post("/user", authenticateADM, CreateUsersController.handler);


// Rotas ADM Telas:
router.get("/admin", authenticateADM, ViewsAdmin.home);
router.get("/admin/appointment", authenticateADM, ViewsAdmin.appointment);
router.get("/admin/user/:id", authenticateADM, ViewsAdmin.updatedata);

//Rota de envio:
router.post("/admin/moderator", authenticateADM, CreateAdminController.handler);
router.post("/admin/unit", authenticateADM, CreateUnitsController.handler);
router.post("/admin/unit/:id", authenticateADM, UpdateUnitController.handler);
router.post("/admin/appointment", authenticateADM, CreateAppointmesntController.handler);
router.post("/admin/user", authenticateADM, UpdateUsersController.handler);


// Rotas Lowuser Telas:
router.get("/lowuser", authenticateLowuser, ViewsLowuser.home);
router.get("/lowuser/forms", authenticateLowuser, ViewsLowuser.form);

//Rota de envio:
router.post("/lowuser/user/:id", authenticateLowuser, UpdateUsersController.handler);


const { Op } = require("sequelize"); // importa o Op para usar operadores

router.get("/api/appointments", async (req, res) => {
  try {
    const appointments = await Appointments.findAll({
      where: {
        userid: null,
      },
      include: [
        {
          model: Units,
          attributes: ['id', 'unit', 'address']
        }
      ],
      order: [['day', 'ASC'], ['createdAt', 'ASC']],
    });

    const uniqueAppointments = [];
    const daysSeen = new Set();

    for (const appt of appointments) {
      if (!daysSeen.has(appt.day)) {
        uniqueAppointments.push(appt);
        daysSeen.add(appt.day);
      }
    }

    res.json(uniqueAppointments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar agendamentos' });
  }
});


router.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    console.log("entrou")
    if (err) {
      console.error("Erro ao encerrar a sessão:", err);
      return res.status(500).json({ error: "Erro ao fazer logout" });
    }
    

    // router.get("/search/unit", async(req,res)=>{

    // });

    res.clearCookie("connect.sid"); // ou o nome do cookie da sua sessão, se for diferente
    res.redirect("/login")
  });
});



module.exports = router;