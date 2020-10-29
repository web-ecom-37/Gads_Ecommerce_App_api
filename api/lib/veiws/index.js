const express = require("express");
const router = express.Router();

router.get('/', (res) => res.send('Welcome to our api, it up and running'));

module.exports = router;