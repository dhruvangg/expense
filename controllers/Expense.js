const db = require("../models")

exports.createExpense = async (req, res) => {
    const { note, amount, categoryId } = req.body;
    try {
        const expense = await db.Expense.create({
            note, amount, categoryId
        })
        res.status(201).json({ "status": "ok", "message": "Created Expense", data: expense })
    } catch (error) {
        res.status(400).json({ "status": "error", "message": error })
    }
}

exports.getExpenses = async (req, res) => {
    const { limit = 2, offset = 0 } = req.query;
    try {
        const total = await db.Expense.count()
        const expenses = await db.Expense.findAll({ limit, offset, include: 'Category'  })
        res.status(200).json({ "status": "ok", "message": "Get expenses", expenses, total, limit, "page": offset + 1, total_pages: Math.ceil(total / limit) })
    } catch (error) {
        res.status(400).json({ "status": "error", "message": error })
    }
}