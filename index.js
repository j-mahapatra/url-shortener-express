const express = require('express');
require('dotenv').config();
const { connectToDB } = require('./connectDB');

const urlRouter = require('./routes/url');

const app = express();
const port = process.env.PORT;

// Database connection
connectToDB();

// Middlewares
app.use(express.json());

// Routers
app.use(urlRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
