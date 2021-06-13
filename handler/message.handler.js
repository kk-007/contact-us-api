const Message = require("../db/models/Message");
const saveMessage = async (req, res, next) => {
    try {
        const { from, title, email, body } = req.body;
        const message = new Message({
            from,
            title,
            email,
            body,
            createdAt: new Date(),
        });
        let messageData = await message.save();
        res.status(200).json(messageData);
    } catch (error) {
        console.log("Error at POST/message===>", error);
        res.status(500).send(error);
    }
};
module.exports = { saveMessage };
