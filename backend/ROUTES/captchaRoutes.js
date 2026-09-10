const express = require("express");
const router = express.Router();
const generateCaptcha = require("../UTILS/captcha");

router.get("/captcha", (req, res) => {
  const captcha = generateCaptcha();
  req.session.captcha = captcha;


    console.log("CAPTCHA GENERATED:", captcha);
    console.log("SESSION ID:", req.sessionID);
    console.log("SESSION CAPTCHA:", req.session.captcha);

  res.json({
    captcha: captcha,
  });
});

module.exports = router;
