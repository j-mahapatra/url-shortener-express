const express = require('express');
const {
  createShortUrl,
  redirectToUrl,
  getDetails,
} = require('../controllers/url');
const { checkAuthentication } = require('../middlewares/authentication');

const router = express.Router();

router
  .post('/create', checkAuthentication, createShortUrl, (req, res) => {
    return res.redirect('/');
  })
  .get('/details/:generatedId', getDetails)
  .get('/:generatedId', redirectToUrl);

module.exports = router;
