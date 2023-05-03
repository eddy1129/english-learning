const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = 8800;

const models = require("./models");
models.sequelize.sync();

app.use(express.json());
app.use(cors());

const learning_vocab = require("./routes/vocab.routes.js");
app.use("/vocab", learning_vocab);

app.listen(port);
