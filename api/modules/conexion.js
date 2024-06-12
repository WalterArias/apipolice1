const mysql = require("mysql");

const cnx = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
});

cnx.connect((error) => {
  if (error) {
    console.log("error en la conexion a la BD");
    throw "error en la conexion a la BD.";
  } else {
    console.log("conexion exitosa !");
  }
});

module.exports = cnx;

//module.exports = cnx;
