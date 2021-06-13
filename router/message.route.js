const express = require("express");
const router = express.Router();
const handler = require("../handler");

router.post("/", handler.message.saveMessage);

module.exports = router;
