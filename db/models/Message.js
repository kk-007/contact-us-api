const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const messageSchema = new Schema({
    from: String,
    title: String,
    email: String,
    body: String,
    createdAt: Date,
});

const Message = new mongoose.model("portfolio", messageSchema);
module.exports = Message;
