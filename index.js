const express = require('express');
require('dotenv').config();
const { connectToDB } = require('./connectDB');
const path = require('path');
const cookieParser = require('cookie-parser');

const staticRouter = require('./routes/static');
const urlRouter = require('./routes/url');
const userRouter = require('./routes/user');

const app = express();
const port = process.env.PORT;

// Setting the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Setting directory for public folder
app.use(express.static(__dirname + '/public'));

// Database connection
connectToDB();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routers
app.use(staticRouter);
app.use(urlRouter);
app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
