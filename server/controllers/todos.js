const Todo = require('../models/todo')

class TodoController{
    static create(req, res, next){
        const {name, description, status, budget_needed, due_date} = req.body

        Todo.create({
            name,
            description,
            status,
            budget_needed: budget_needed || 0,
            created_date: new Date(),
            due_date: due_date || null
        })
            .then(todo=>{
                res.status(201).json({todo, msg: 'Create Todo Success'})
            })
            .catch(err=>{
                next(err)
            })
    }
}

module.exports = TodoController