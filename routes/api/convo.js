const router = require("express").Router();
const convoController = require("../../controllers/convoController");

router.get("/all", convoController.all);

// Matches with "/api/users"
router.route("/:id")
  .get(convoController.get)
  .post(convoController.create)
  .put(convoController.update)

router.route('/')
  .post(convoController.create)

module.exports = router;
