const router = require("express").Router();
const userController = require("../controllers/userController");
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("../middleware/verifyToken");


// UPADATE USER
router.put("/", verifyTokenAndAuthorization, userController.updateUser);
router.put('/cv', verifyTokenAndAuthorization,userController.updateUserCV);

// DELETE USER

router.delete("/", verifyTokenAndAuthorization, userController.deleteUser);

// GET USER

router.get("/", verifyTokenAndAuthorization, userController.getUser);


// GET ALL USER

router.get("/", verifyTokenAndAdmin, userController.getAllUsers);


module.exports = router