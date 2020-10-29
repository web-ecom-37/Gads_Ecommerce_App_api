const express = require("express");
const router = express.Router();

router.get('/', (req, res) => res.send('Welcome to our api, it up and running'));

module.exports = router;