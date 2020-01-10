const router = require('express').Router()
const User = require('../controllers/users')

router.post('/login', User.login)
router.post('/register', User.register)
router.post('/google-sign', User.googleSign)
router.patch('/', Todo.changePassword)
router.delete('/', Todo.deleteUser)

module.exports = router