const express = require('express');
require('dotenv').config();
const { connectToDB } = require('./connectDB');

const app = express();

const port = process.env.PORT;

// Database connection
connectToDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
