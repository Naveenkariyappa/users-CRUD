const express = require('express');
const mongoose = require('mongoose');

const app = express();

const port = 9000;
const userName = 'naveen';
const password = 'regitregit';
const url = `mongodb+srv://${userName}:${password}@cluster0.7rlgb.mongodb.net/medical `;
mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;
app.use(express.json());
app.use(express.urlencoded());
try {
  con.on('open', () => {
    console.log('connected');
  });
} catch (error) {
  console.log('Error: ' + error);
}

const usersrouter = require('./routes/users');
app.use('/users', usersrouter);

app.listen(port, () => {
  console.log('Server started');
});
