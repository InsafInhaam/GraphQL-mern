const Admin = require("../models/Admin");

exports.register = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const user = await Admin.create({
      username,
      email,
      password,
    });

    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res
      .status(400)
      .json({ success: false, error: "Invalid email or password" });
  }

  try {
    const user = await Admin.findOne({ email }).select("+password");

    if (!user) {
      res.status(404).json({ success: false, error: "User not found" });
    }

    const isMatch = await user.matchPasswords(password);

    if (!isMatch) {
      res.status(404).json({ success: false, error: "Invaild Credentials" });
    }

    res.status(200).json({ success: true, token: "bnumrervbuenjncei" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.forgotpassword = (req, res, next) => {
  res.send("forgot password Route");
};

exports.resetpassword = (req, res, next) => {
  res.send("reset password Route");
};
