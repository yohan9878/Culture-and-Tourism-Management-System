const router = require("express").Router();
const { findOneUser } = require("../controllers/user/userControls");

router.get("/:id", findOneUser);

module.exports = router;
