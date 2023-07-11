const router = require('express').Router();

const {signup, getbill} = require("../controller/appController")

router.post('/user/register', signup )

router.post('/user/getbill', getbill )

module.exports = router;