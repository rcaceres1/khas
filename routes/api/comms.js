const express = require('express');
const router = express.Router();
const commCtrl = require('../../controllers/comms');

/*---------- Public Routes ----------*/
router.get('/all', commCtrl.getAllComms)
router.post('/', commCtrl.createComm)
router.post('/:id', commCtrl.deleteComm)
/*---------- Protected Routes ----------*/




module.exports = router;
