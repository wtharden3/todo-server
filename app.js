require('dotenv').config();

const express = require('express');
const db = require('./db');
const app = express();

app.use(require("./middleware/headers"));

const controllers = require('./controllers');
const validateSession = require("./middleware/validateSession");

app.use(express.json());

app.use('/user', controllers.usercontroller);
app.use("/lists", validateSession, controllers.listcontroller);

db.authenticate()
.then(()=> db.sync())  // {force: true} to empty tables
.then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`[SERVER] App is listening on ${process.env.PORT} 😃`)
  })
})
.catch(err => {
  console.log(`[SERVER] Server Crashed 😟`);
  console.log(err);
})