const mongoose = require('mongoose');

const mongoDbUri = process.env.MONGODB_URI;

const connectToDB = () => {
  return mongoose
    .connect(mongoDbUri)
    .then(() => {
      console.log('Database connected successfully!');
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { connectToDB };
