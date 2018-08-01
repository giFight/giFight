const router = require("express").Router();
const convoController = require("../../controllers/convoController");

// Matches with "/api/users"
router.route("/:id")
  .get(convoController.get)
  .post(convoController.create)
  .put(convoController.update)

module.exports = router;
