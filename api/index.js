var router = require("express").Router();
var profileRoutes = require("./profile");

router.use("/api/profile", profileRoutes);

module.exports = router;