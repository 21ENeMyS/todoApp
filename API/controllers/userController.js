const User = require("../models/Users");

exports.find = async (req, res) => {
  const { username } = req.params;
  console.log(username);
  try {
    const user = await User.findOne({ username });
    if (!user) {
      new Error(`${username} not found`);
    }

    return res.status(200).json({ user });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};
