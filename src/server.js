const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const path = require("path");
const router = require("./router");
const cors = require("cors");
// // const db = require("./database/config/connection");
// const {createTables} = require("./database/model/RelationDB")
dotenv.config();

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'js');


app.set("views", path.join(__dirname, "views"));


app.use(express.static(path.join(__dirname, "public")));


app.use(router);



const { PORT } = process.env;

app.listen(PORT || 3000, (error) => error ? console.log(`Servidor está dando problema ${PORT}`) : console.log(`Servidor rodando corretamente na porta ${PORT}`));