const mongoose = require("mongoose");
const mongoUrl = process.env.DB_URL;

const connect = () => {
    return new Promise((resolve, reject) => {
        mongoose
            .connect(mongoUrl, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: false,
            })
            .then((res) => {
                console.log("DB Connection Successful");
                resolve(true);
            })
            .catch((err) => {
                console.log("DB connection error==> ", err);
                reject(false);
            });
    });
};

module.exports = connect;
