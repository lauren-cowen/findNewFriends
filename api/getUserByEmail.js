const router = require("express").Router();
const profileController = require("../controllers/profileController");

router.route('/getuserbyemail')
	.get(profileController.findByEmail)

module.exports = router;