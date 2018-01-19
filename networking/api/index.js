var router = require("express").Router();
var newUserRoutes = require("./newUser");
var profileRoutes = require("./profile");

router.use("/newuser", newUserRoutes);
router.use("/profile", profileRoutes);

module.exports = router;