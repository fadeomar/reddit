const router = require("express").Router();

const { getSignIn, getSignUp, postSignup } = require("../controllers");

router.get("/signin", getSignIn);
router.get("/signup", getSignUp);
router.post("/signup", postSignup);

module.exports = router;
