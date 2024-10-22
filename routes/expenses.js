const express = require('express'),
    router = express.Router(),
    Expense = require('../controllers/Expense');

router.get('/', Expense.getExpenses)
router.post('/', Expense.createExpense)

module.exports = router