require("dotenv").config();
const connectDB = require("./db/connect.db");
const server = require("./server");
const PORT = process.env.PORT || 3000;
(async () => {
    try {
        await connectDB();
        server.listen(PORT, console.log(`sever listening on ${PORT}`));
    } catch (error) {
        console.log(error);
    }
})();
