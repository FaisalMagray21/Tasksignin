const pool = require("../config/db");

const createUser = async (fullname, email, password) => {
  const result = await pool.request()
    .input("fullname", fullname)
    .input("email", email)
    .input("password", password)
    .query(
      "INSERT INTO users (fullname, email, password) VALUES (@fullname, @email, @password)"
    );

  return result;
};

const getUserByEmail = async (email) => {
  const result = await pool.request()
    .input("email", email)
    .query("SELECT * FROM users WHERE email = @email");

  return result.recordset;
};

module.exports = { createUser, getUserByEmail };
