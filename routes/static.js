const express = require('express');
const urlModel = require('../models/url');
const { checkAuthentication } = require('../middlewares/authentication');
const userModel = require('../models/user');

const router = express.Router();

router.get('/', checkAuthentication, async (req, res) => {
  if (!req.userEmail) {
    return res.redirect('/login');
  }
  const loggedInUser = await userModel.find({ email: req.userEmail });
  if (!loggedInUser.length) {
    return res.redirect('/login');
  }
  const url = new URL(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
  const allUrls = await urlModel.find({ createdBy: req.userEmail });
  return res.render('home', {
    urls: allUrls,
    urlOrigin: url.origin + '/',
  });
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/login', (req, res) => {
  res.render('login');
});

module.exports = router;
