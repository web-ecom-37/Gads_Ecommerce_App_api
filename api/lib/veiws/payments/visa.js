const express = require("express");
const router = express.Router();

const { requireSignin, isAuth } = require("../../controllers/authentication/auth");
const { userById } = require("../../controllers/authentication/user");
const { generateToken, processPayment } = require("../../controllers/payments/visa");

router.get("/braintree/getToken/:userId", requireSignin, isAuth, generateToken);
router.post(
    "/braintree/payment/:userId",
    requireSignin,
    isAuth,
    processPayment
);

router.param("userId", userById);

module.exports = router;
