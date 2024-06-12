/**
 * USANDO COMMON JS : TECNOLOGIA CLASICA DE JS
 * APLICAMOS require('nombredelmodulo')
 * 
 */

const express = require("express");
const cors = require("cors");
const app = express();
require('dotenv').config()


var corsOptions = {
  origin: "http://127.0.0.1:5500",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/images", express.static("uploads/avatars/"));  //ruta estatica

//rutas de la app
//microservicio people
app.use("/", require("./src/people"));
app.use("/", require("./src/users"));
app.use("/", require("./src/history"));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`app on in port: ${port}`);
});
