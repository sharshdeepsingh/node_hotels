const express = require('express')
const app = express();
const db=require('./db');
const Person = require('./models/person')
const Menu=require('./models/menu')

const bodyParser=require('body-parser');
app.use(bodyParser.json());






const personRoutes= require('./routes/personRoutes')
app.use('/person',personRoutes)  ////// important very very 

const menuRoutes=require('./routes/menuRoutes');
app.use('/menu',menuRoutes);  ///very very important





app.get('/', function (req, res) {
  res.send('Welcome to my hotel ! How can i help you sir?')
})

app.get('/waiter', (req, res) => {
  res.send('sure sir,you can give me your order as I am your waiter')
});

app.listen(3000, () => {
  console.log('server is running on port number 3000')
});