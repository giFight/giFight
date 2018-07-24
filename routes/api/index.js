const router = require("express").Router();
const bookRoutes = require("./users");

// User routes
router.use("/books", bookRoutes);

module.exports = router;
