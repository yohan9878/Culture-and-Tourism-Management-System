const router = require("express").Router();
const {
	findOneUser,
	retrieveAllUsers,
	updateUser,
	deleteUser,
	filterUserEmail,
} = require("../controllers/user/userControls");

router.get("/:id", findOneUser);
router.post("/email/filter", filterUserEmail);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);
router.get("/", retrieveAllUsers);

module.exports = router;
