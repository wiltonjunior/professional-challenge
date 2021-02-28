require("dotenv").config();

const cors = require("cors");
const helmet = require("helmet");
const express = require("express");
const routes = require("./routes");

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger_output.json')

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use("/api/v1", routes);

app.listen(process.env.PORT, () =>
  console.info(`⚙️ - Api is running on http://localhost:${process.env.PORT}`)
);
