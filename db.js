const mysql = require("mysql")
function connect()
{
    const connection = mysql.createConnection({
        host:"192.168.41.230",
        database:"empdb",
        user:"root",
        password:"manager",
        port:9099
    })
    connection.connect();
    return connection;
}

module.exports = {connect:connect}