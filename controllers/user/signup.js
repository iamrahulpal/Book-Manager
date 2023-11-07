const User = require("../../models/User");
const bcrypt = require("bcryptjs");

class registerUser {
  async checkUser(email, username) {
    try {
      let isUser = await User.findOne({ $or: [{ email }, { username }] });
      if (isUser) throw "Email or Username already exists";
      return;
    } catch (error) {
      throw error;
    }
  }
  process = async (req, res) => {
    try {
      const { firstName, lastName, username, email, password } = req.body;

      const isUser = await this.checkUser(email, username);

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = await User.create({
        firstName,
        lastName,
        username,
        email,
        password: hashedPassword
      });

      if (!newUser) throw "Failed to register";

      res.status(201).json({
        type: "Success",
        data: "User registered successfully",
      });
    } catch (error) {
      res.status(400).json({
        type: "Error",
        error: error.error || error,
      });
    }
  };
}

module.exports = new registerUser();
