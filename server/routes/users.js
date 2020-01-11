const router = require('express').Router()
const User = require('../controllers/users')

router.post('/register', User.register)
router.post('/login', User.login)
router.post('/google-sign', User.googleSign)
// router.patch('/', User.changePassword)
// router.delete('/', User.deleteUser)

module.exports = router