const router = require('express').Router()
const Todo = require('../controllers/todos')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.use(authentication);
router.use(authorization)

router.post('/', Todo.create)
router.get('/', Todo.showAll)
router.put('/', Todo.update)
router.patch('/', Todo.updateStatus)
router.delete('/', Todo.delete)

module.exports = router