// class CategoryRoutes {
//     constructor(app) {
//         this.app = app;
//         this.initializeRoutes();
//     }

//     initializeRoutes() {
//         this.app.get('/category', this.getUsers);
//         this.app.post('/category', this.createUser);
//     }

//     getUsers(req, res) {
//         res.json({ message: 'Get users' });
//     }

//     createUser(req, res) {
//         res.json({ message: 'User created' });
//     }
// }

// export default CategoryRoutes;


const express = require('express'),
    router = express.Router(),
    Category = require('../controllers/Category');

router.get('/', Category.getCategoies)
router.post('/', Category.createCategory)

module.exports = router