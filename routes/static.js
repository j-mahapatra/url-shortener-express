const express = require('express');
const urlModel = require('../models/url');
const router = express.Router();

router.get('/', async (req, res) => {
  const url = new URL(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
  const allUrls = await urlModel.find({});
  res.render('home', {
    urls: allUrls,
    urlOrigin: url.origin + '/',
  });
});

module.exports = router;
