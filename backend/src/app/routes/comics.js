const conn = require("../../config/database");

module.exports = (app) => {
    app.get('/comic', (req, res, next) => {
        let consulta = "SELECT id_comic, nombre, anio_impresion, sinopsis, editorial FROM comic";
        conn.query(consulta, (err, rows, cols) =>{
            if (err){
                res.status(500).json({status: 0, mensaje: "Error"});
            } else{
                res.json({status: 1, mensaje: "Exitoso", comic: rows}); 
            }
        });
    });

    app.post('/comic', (req, res, next)=>{
        let consulta = "INSERT INTO comic (nombre, anio_impresion, sinopsis, editorial) VALUES('"+ req.body.nombre+"','"+req.body.anio_impresion+"','"+req.body.sinopsis+"','"+req.body.editorial+"')";
        conn.query(consulta, (err, rows, cols) => {
            if(err){
                res.status(500).json({status: 0, mensaje: "Error"})
            } else {
                res.json({mensaje: "Exitoso"});
            }
        });
    });

    app.put('/comic/:id', (req, res, next)=>{
        let consulta = "UPDATE comic SET nombre = '" + req.body.nombre + "', anio_impresion = '" + req.body.anio_impresion + "', sinopsis = '" + req.body.sinopsis +  "', editorial = '" + req.body.editorial + "'WHERE id_comic = " + req.params.id;
        
        conn.query(consulta, (err, rows, cols) => {
            if(err){
                res.status(500).json({status: 0, mensaje: "Error"});
            }else{
                res.json({mensaje: "Exitoso"});
            }
        });
    });

    app.delete('/comic/:id', (req, res, next) =>{
        let consulta = "DELETE FROM comic WHERE id_comic = "+ req.params.id;
        conn.query(consulta, (err, rows, cols) => {
            if(err){
                res.status(500).json({status: 0, mensaje: "Error"});
            } else{
                res.json({mensaje: "Exitoso"});
            }
        });
    });
}