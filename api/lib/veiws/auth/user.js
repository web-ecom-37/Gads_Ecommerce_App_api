const express = require("express");
const router = express.Router();

const { requireSignin, isAuth, isAdmin } = require("../../controllers/authentication/auth");

const {
    userById,
    read,
    update
} = require("../../controllers/authentication/user");

router.get("/secret/:userId", requireSignin, isAuth, isAdmin, (req, res) => {
    res.json({
        user: req.profile
    });
});

router.get("/user/:userId", requireSignin, isAuth, read);
router.put("/user/:userId", requireSignin, isAuth, update);
// TODO :: Purchase history route

router.param("userId", userById);

module.exports = router;