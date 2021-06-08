const db = require("mysql");
const conn = db.createConnection({
  host: "localhost",
  user: "root",
  port: 3307,
  database: "proyecto"
});

conn.connect((error) => {
  if (error) {
    console.log(error);
    console.log("Error en conexion con BD");
  } else {
      console.log('Conexion Exitosa');
  }
});

module.exports = conn;