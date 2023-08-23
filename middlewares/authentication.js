const jwt = require('jsonwebtoken');

function checkAuthentication(req, res, next) {
  try {
    const token = req.cookies.token;
    if (!token) {
      res.redirect('/login');
    }
    const user = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.userEmail = user;
    next();
  } catch (error) {
    req.userEmail = null;
    return res.redirect('/login');
  }
}

module.exports = { checkAuthentication };
