require('dotenv').config();

const express = require('express');
const db = require('./db');
const app = express();

const controllers = require('./controllers');

app.use(express.json());

app.use('/user', controllers.usercontroller);

db.authenticate()
.then(()=> db.sync()) //{force: true} to empty tables
.then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`[SERVER] App is listening on ${process.env.PORT}`)
  })
})
.catch(err => {
  console.log(`[SERVER] Server Crashed 😟`);
  console.log(err);
})