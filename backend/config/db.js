const sql = require("mssql");

const config = {
  user: "sa",
  password: "123",
  server: "DESKTOP-LRP5DOH",
  database: "auth_db",
  options: {
    encrypt: false,
    trustServerCertificate: true
  }
};

const pool = new sql.ConnectionPool(config);

pool.connect()
  .then(() => {
    console.log(" MSSQL Connected Successfully!");
  })
  .catch((err) => {
    console.log(" MSSQL Connection Failed:", err.message);
  });

module.exports = pool;
