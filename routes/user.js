const express = require("express");
const UserController = require("../controllers/UserController");
const logger = require("../config/logger/winston");

const router = express.Router();
const userController = new UserController();
logger.debug("userController: ", userController);
router.post("/register", userController.createUser);

router.post("/login", function(req, res) {

});

router.get("/who", function(req, res) {
    res.send("WHO");
});

router.patch("/forgot/password", function(req, res) {

});

router.put("/:userId", function(req, res) {

});

router.patch("/password/:userId", function(req, res) {

});

router.get("/:userId", function(req, res) {
    res.send(req.params.userId);
});

module.exports = router;