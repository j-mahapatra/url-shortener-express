const { nanoid } = require('nanoid');
const urlModel = require('../models/url');

async function createShortUrl(req, res) {
  try {
    if (!req.body || !req.body.url) {
      return res.status(400).json({
        status: 'failed',
        message: 'URL is required',
      });
    }

    const generatedId = nanoid(10);
    const redirectUrl = req.body.url;

    await urlModel.create({
      generatedId,
      redirectUrl,
    });

    return res.json({
      status: 'success',
      generatedId,
    });
  } catch (error) {
    return res.status(400).json({
      status: 'failed',
      message: error,
    });
  }
}

async function redirectToUrl(req, res) {
  const generatedId = req.params.generatedId;

  try {
    const urlData = await urlModel.findOneAndUpdate(
      {
        generatedId,
      },
      {
        $push: {
          visitHistory: {
            timestamp: new Date(),
          },
        },
      }
    );

    let redirectUrl = urlData.redirectUrl;
    if (!redirectUrl.includes('http')) {
      redirectUrl = 'https://' + redirectUrl;
    }

    return res.redirect(redirectUrl);
  } catch (error) {
    return res.status(404).json({
      status: 'failed',
      message: 'Invalid URL',
    });
  }
}

async function getDetails(req, res) {
  const generatedId = req.params.generatedId;
  const urlData = await urlModel.findOne({ generatedId });
  return res.json(urlData);
}

module.exports = { createShortUrl, redirectToUrl, getDetails };
