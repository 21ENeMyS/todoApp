const User = require("../models/Users");

exports.find = async (req, res) => {
  const { name } = req.params;
  console.log(User);
  try {
    const user = await User.findOne({ name });
    if (!user) {
      new Error(`${username} not found`);
    }

    return res.status(200).json({ user });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};
