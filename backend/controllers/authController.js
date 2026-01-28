const bcrypt = require("bcryptjs");
const { createUser, getUserByEmail } = require("../models/userModel");

exports.signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const hash = await bcrypt.hash(password, 10);

    await createUser(fullname, email, hash);
    res.status(201).json({ msg: "Signup successful" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Error" });
  }
};

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await getUserByEmail(email);

    if (user.length === 0)
      return res.status(404).json({ msg: "Email not found" });

    const isMatch = await bcrypt.compare(password, user[0].password);

    if (!isMatch)
      return res.status(400).json({ msg: "Password is incorrect" });

    res.status(200).json({ msg: "Login successful" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Error" });
  }
};
