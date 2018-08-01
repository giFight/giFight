const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  likes: {type: Number, default: 0},
  convo:[{
    type: Schema.Types.ObjectId,
    ref: "Convo"
  }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
