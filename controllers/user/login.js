const User = require("../../models/User");
const validation = require("../../util/validate");
const schema = require("../../jsonSchema/user/login");
const bcrypt = require("bcryptjs");

class loginUser {
  async checkUser(email, username) {
    try {
      let isUser = await User.findOne({ $or: [{ email }, { username }] });
      if (!isUser) throw "Email or Username is invalid";
      return isUser;
    } catch (error) {
      throw error;
    }
  }
  process = async (req, res) => {
    try {
      validation(schema, req.body);
      const { username, email, password } = req.body;

      let user = await this.checkUser(email, username);

      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) throw "password does not match";

     
      res.status(201).json({
        type: "Success",
        data: "logged in successfully",
      });
    } catch (error) {
      res.status(400).json({
        type: "Error",
        error: error.error || error,
      });
    }
  };
}

module.exports = new loginUser();
