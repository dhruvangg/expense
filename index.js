// import express from 'express';
// import UserRoutes from './routes/userRoutes.mjs';

// class Server {
//     constructor() {
//         this.app = express();
//         this.port = process.env.PORT || 3000;
//         this.initializeMiddleware();
//         this.initializeRoutes();
//     }

//     initializeMiddleware() {
//         this.app.use(express.json());
//     }

//     initializeRoutes() {
//         this.app.use('/', (req, res) => {
//             res.send('Welcome to docker world!')
//         })
//         new UserRoutes(this.app);
//     }

//     start() {
//         this.app.listen(this.port, () => {
//             console.log(`Server listening on port ${this.port}`);
//         });
//     }
// }

// const server = new Server();
// server.start();

const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    db = require('./models');

const port = 3000
const app = express()

app.use(cors());

const corsOptions = {
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'], 
};

app.use(cors(corsOptions));

app.use(bodyParser.json())

db.sequelize.sync().then(() => {
    console.log('Database connected');
});

app.get('/', (req, res) => {
    res.send('Welcome to docker world!')
})

app.use('/category', require('./routes/categories'))
app.use('/expense', require('./routes/expenses'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})