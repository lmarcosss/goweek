const User = require("../models/User");

module.exports = {
  async index(req, res) {
    const users = await User.find({}).sort("-createdAt");

    return res.json(users);
  },

  async getId(req, res) {
    const user = await User.findById(req.params.id);

    return res.json(user);
  },

  async store(req, res) {
    const user = await User.create(req.body);

    return res.json(user);
  }
};
