const express = require('express');
const app = express();
const db = require('./db');
const Person = require('./models/person'); // Use lowercase 'models' if your folder is named 'models'
const Menu = require('./Models/menu');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);  // Important

const menuRoutes = require('./routes/menuRoutes');
app.use('/menu', menuRoutes);  // Very important

app.get('/', function (req, res) {
    res.send('Welcome to my hotel! How can I help you, sir?');
});

app.get('/waiter', (req, res) => {
    res.send('Sure sir, you can give me your order as I am your waiter.');
});

app.listen(PORT, () => {
    console.log(`Server is running on port number ${PORT}`);
});