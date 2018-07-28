const router = require("express").Router();
const bookRoutes = require("./users");
const convoRoutes = require("./convo");

// User routes
router.use("/books", bookRoutes);
router.use("/convos", convoRoutes);

module.exports = router;
