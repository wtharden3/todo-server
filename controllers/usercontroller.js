const router = require('express').Router();
const {User} = require('../models/user');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { UniqueConstraintError} = require('sequelize/lib/errors');

//signup user
router.post('/signup', async (req, res) => {
  let {username, password} = req.body;


})

module.exports = router;