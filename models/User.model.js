const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    email: {
      type: String,
      require: [true, "Please enter a correct email address"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter  valid password"],
    },
    username: String,
    slackID: String,
    googleID: String,
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
