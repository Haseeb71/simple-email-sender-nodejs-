const express = require("express");
const router = express.Router();
const controller = require('../controller/controller')


router.post("/sendEmail",controller.sendEmail);



module.exports = router;