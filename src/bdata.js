/* Modulo que gestiona la conexion con la base de datos */

const mysql = require("mysql2");

/* Cadena de conexion */

const conexion = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

conexion.connect((error) => {
  if (error) {
    console.log(error);
    // throw "database connection error !";
  } else {
    console.log("Connection successful ! ");
  }
});

module.exports = conexion;
