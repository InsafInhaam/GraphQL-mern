const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const AdminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"],
  },
  email: {
    type: String,
    required: [true, "Please provide a email address"],
    unique: true,
    // match: [
    //   "[a-z0-9]+@[a-z]+.[a-z]{2,3}",
    //   "Please provide a valid email address",
    // ],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 6,
    select: false,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

AdminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

AdminSchema.methods.matchPasswords = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;
