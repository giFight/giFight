const router = require("express").Router();
const convoController = require("../../controllers/convoController");

// Matches with "/api/users"
router.route("/all").get(convoController.all)

router.route("/:id")
  .get(convoController.get)
  .post(convoController.create)
  .put(convoController.update)

router.route('/')
  .post(convoController.create)

module.exports = router;