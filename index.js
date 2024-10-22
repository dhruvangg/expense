const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    db = require('./models');

const port = 3000
const app = express()

app.use(bodyParser.json())

db.sequelize.sync().then(() => {
    console.log('Database connected');
});

// sequelize
//     .authenticate()
//     .then(() => {
//         console.log('Connection to PostgreSQL has been established successfully.');
//         return sequelize.sync(); // Sync all models with the database
//     })
//     .then(() => {
//         console.log('All models were synchronized successfully.');
//     })
//     .catch((error) => {
//         console.error('Unable to connect to the database:', error);
//     });


app.get('/', (req, res) => {
    res.send('Welcome to docker world!')
})

app.use('/category', require('./routes/categories'))
app.use('/expense', require('./routes/expenses'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})