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
        error: 'OOPS! Something went wrong. Unable to register user.',
      });
    }
  }
});

//login
router.post('/login', async (req, res) => {
  let { email, password } = req.body;

  try {
    let loginUser = await User.findOne({ where: { email } });
    //console.log(loginUser);

    if (loginUser && bcrypt.compare(password, loginUser.password)) {
      //assign a token
      const token = jwt.sign({ id: loginUser.id }, process.env.JWT_SECRET, {
        expiresIn: 60 * 60 * 24,
      });
      res.status(200).json({
        message: "You're In! 👍",
        user: loginUser,
        token,
      });
    } else {
      res.status(401).json({
        message: "Login failed: User Credentials Incorrect 🧐"
      })
    }
  } catch (err) {
    res.status(500).json({
      error: 'Uh oh! 😟 Error logging in!',
    });
  }
});

module.exports = router;
