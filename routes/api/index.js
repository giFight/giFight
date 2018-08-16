const router = require("express").Router();
const userRoutes = require("./users");
const convoRoutes = require("./convo");

// User routes
router.use("/convos", convoRoutes);
router.use("/users", userRoutes);

module.exports = router;
