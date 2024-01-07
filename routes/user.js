const express = require('express');
const { createUser, loginUser, logoutUser } = require('../controllers/user');

const router = express.Router();

router.post('/signup', createUser);
router.post('/login', loginUser);
router.get('/logout', logoutUser);

module.exports = router;
