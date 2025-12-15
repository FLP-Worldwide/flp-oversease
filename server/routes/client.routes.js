const express = require("express");
const { submitRequirement } = require("../controllers/client.controller");

const router = express.Router();

router.post("/requirement", submitRequirement);

module.exports = router;
