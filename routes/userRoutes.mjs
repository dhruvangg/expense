class UserRoutes {
    constructor(app) {
        this.app = app;
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.app.get('/users', this.getUsers);
        this.app.post('/users', this.createUser);
    }

    getUsers(req, res) {
        res.json({ message: 'Get users' });
    }

    createUser(req, res) {
        res.json({ message: 'User created' });
    }
}

export default UserRoutes;