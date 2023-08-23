const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  generatedId: {
    type: String,
    required: true,
    unique: true,
  },
  redirectUrl: {
    type: String,
    required: true,
  },
  createdBy: {
    type: String,
    required: true,
  },
  visitHistory: [
    {
      timestamp: {
        type: String,
      },
    },
  ],
});

const urlModel = mongoose.model('urls', urlSchema);

module.exports = urlModel;
