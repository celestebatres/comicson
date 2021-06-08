const conn = require("../../config/database");

module.exports = (app) => {
    app.get('/usuario', (req, res, next) => {
        let consulta = "SELECT id_usuario, nombre, username, fecha_nac, sexo FROM usuario";
        conn.query(consulta, (err, rows, cols) =>{
            if (err){
                res.status(500).json({status: 0, mensaje: "Error"});
            } else{
                res.json({status: 1, mensaje: "Exitoso", usuarios: rows});
            }
        });
    });

    app.post('/usuario', (req, res, next)=>{
        let consulta = "INSERT INTO usuario (nombre, username, pass, fecha_nac, sexo) VALUES('"+ req.body.nombre+"','"+req.body.username+"','"+req.body.pass+"','"+req.body.fecha_nac+"','"+req.body.sexo+"')";
        conn.query(consulta, (err, rows, cols) => {
            if(err){
                res.status(500).json({status: 0, mensaje: "Error"})
            } else {
                res.json({mensaje: "Exitoso"});
            }
        });
    });
}