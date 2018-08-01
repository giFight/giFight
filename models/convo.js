const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const convoSchema = new Schema({
  topicName: { type: String, required: true },
  gifUrls: [{ type: String, trim: true}],
  users: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }]
});

const Convo = mongoose.model("Convo", convoSchema);

module.exports = Convo;