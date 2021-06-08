const app = require('./config/server');
require('./app/routes/usuarios')(app);
require('./app/routes/comics')(app);
require('./config/database');
app.listen(app.get("port"), () => console.log(`Ejecutando en puerto ${app.get("port")}`));