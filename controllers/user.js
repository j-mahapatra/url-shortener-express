const userModel = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function createUser(req, res) {
  try {
    const { username, email, password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
      return res.render('signup', {
        status: 'failed',
        message: "Password and Confirm Password fields don't match",
      });
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    await userModel.create({
      username,
      email,
      password: hashedPassword,
    });
    return res.redirect('/');
  } catch (err) {
    return res.render('signup', {
      status: 'failed',
      message: 'User already exists',
    });
  }
}

async function loginUser(req, res) {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    return res.render('login', {
      status: 'failed',
      message: 'Incorrect Email or Password',
    });
  }
  const token = jwt.sign(user.email, process.env.JWT_SECRET_KEY);
  res.cookie('token', token, {
    expires: new Date(Date.now() + 60 * 60 * 12),
    httpOnly: true,
  });
  res.redirect('/');
}

module.exports = { createUser, loginUser };
