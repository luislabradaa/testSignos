const mysql = require('mysql2');

const conexion = mysql.createConnection({
    host:'containers-us-west-88.railway.app',
    port: 5663,
    user: 'root',
    password: 'U47LTOJ79Xcil9CsbH5C',
    database: 'railway'
});

conexion.connect((error)=>{
    if(error){
        console.log("El error de conexión es: " + error);
        return
    }
    console.log("Conexión estaleblecida correctamente");
});

module.exports = conexion;