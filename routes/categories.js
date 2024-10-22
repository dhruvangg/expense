const express = require('express'),
    router = express.Router(),
    Category = require('../controllers/Category');

router.get('/', Category.getCategoies)
router.post('/', Category.createCategory)

module.exports = router