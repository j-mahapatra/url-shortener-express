const express = require('express');
const {
  createShortUrl,
  redirectToUrl,
  getDetails,
} = require('../controllers/url');

const router = express.Router();

router
  .post('/create', createShortUrl)
  .get('/details/:generatedId', getDetails)
  .get('/:generatedId', redirectToUrl);

module.exports = router;
