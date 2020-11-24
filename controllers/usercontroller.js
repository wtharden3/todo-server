const router = require('express').Router();
const { User } = require('../models');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { UniqueConstraintError } = require('sequelize/lib/errors');

//signup user
router.post('/signup', async (req, res) => {
  let { email, password, firstname, lastname } = req.body;

  try {
    const newUser = await User.create({
      firstname,
      lastname,
      email,
      password: bcrypt.hashSync(password, 13),
    });

    res.status(201).json({
      message: 'User registered!',
      user: newUser,
    });
  } catch (err) {
    if (err instanceof UniqueConstraintError) {
      res.status(409).json({
        message:
          'username is not available. please try again with another username',
      });
    } else {
      res.status(500).json({
        error: 'OOPS! Something went wrong. Unable to register user.'
      })
    }
  }
});

module.exports = router;
