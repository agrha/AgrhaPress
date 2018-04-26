var express = require('express');
var router = express.Router();
const User = require('../controllers/user.controller')

/* GET users listing. */
router.get('/', User.read)
router.post('/',User.signup)
router.post('/signin',User.signin)
router.put('/update',User.update)
router.delete('/',User.delete)

module.exports = router;
