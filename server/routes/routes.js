const express = require('express')
const router = express.Router()
const {
    getAlltodo,
    getSingleTodo,
    editSingleTodo,
    deleteSingleTodo,
    createSingleTodo,
    findCompleteTodo,
    findPendingTodo

} =require('../controller/controller')

router.route('/').get(getAlltodo).post(createSingleTodo)
router.route('/:id').get(getSingleTodo).delete(deleteSingleTodo)
router.route('/patch/:id').patch(editSingleTodo)
router.route('/pending/todo').get(findPendingTodo)
router.route('/completed/todo').get(findCompleteTodo)

module.exports = router