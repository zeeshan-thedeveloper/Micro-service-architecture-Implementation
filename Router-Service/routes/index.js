var express = require('express');
var router = express.Router();
const switcherController=require("../controller/switcher")
/* GET home page. */

router.get('/getDataFromServiceOne',switcherController.getDataFromServiceOne);
router.get('/getDataFromServiceTwo',switcherController.getDataFromServiceTwo);

module.exports = router;
