const router = require("express").Router();
const profileController = require("../controllers/profileController");

// Matches with "/api/profile"
router.route("/")
  .get(profileController.findAll)
  .post(profileController.create);

  router
  	.route("/findbyemail")
  	.get(profileController.findByEmail)

// Matches with "/api/profile/:id"
router
  .route("/:id")
  .get(profileController.findById)
  .put(profileController.update)
  .delete(profileController.remove);

  router
  	.route("/getAllProfiles")
  	.get(profileController.findAll)



module.exports = router;
