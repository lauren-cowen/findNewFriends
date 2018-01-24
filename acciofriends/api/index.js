var router = require("express").Router();
var profileRoutes = require("./profile");

router.use("/profile", profileRoutes);

module.exports = router;