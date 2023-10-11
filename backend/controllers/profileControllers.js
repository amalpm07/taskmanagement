const User = require("../models/User");

exports.getProfile = async (req, res) => {
  try {
    // Ensure that req.user is available from your authentication middleware
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({ status: false, msg: "User not found." });
    }

    // Return the user's profile if found
    res.status(200).json({ user, status: true, msg: "Profile found successfully." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: false, msg: "Internal Server Error" });
  }
}
