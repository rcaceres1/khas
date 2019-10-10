const express = require('express');
const router = express.Router();
const commCtrl = require('../../controllers/comms');

/*---------- Public Routes ----------*/
router.post('/all', commCtrl.getAllComms)
router.post('/create', commCtrl.createComm)
router.post('/deleteComm', commCtrl.deleteComm)
/*---------- Protected Routes ----------*/




module.exports = router;
