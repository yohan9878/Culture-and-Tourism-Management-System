const router = require("express").Router();
const {
	register,
	login,
	logout,
} = require("../controllers/auth/authControls");

router.post("/user", register);
router.post("/", login);
router.post("/logout", logout);

module.exports = router;
