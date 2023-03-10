const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("dotenv").config();
require("./config/db");

const port = process.env.PORT ? Number(process.env.PORT) : 5000;
const router = require("./src/routes/router");

app.use("/", router);

app.listen(port);
