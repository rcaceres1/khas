const express = require('express');
const router = express.Router();
const commCtrl = require('../../controllers/comms');
/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/

router.use(require('../../config/auth'));

router.get('/all', checkAuth, commCtrl.getAllComms)
router.get('/:id', checkAuth, commCtrl.getComm)
router.post('/', checkAuth, commCtrl.createComm)
router.delete('/:id', checkAuth, commCtrl.deleteComm)
router.put('/:id', commCtrl.updateComm);

/*----- Helper Functions -----*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}


module.exports = router;
