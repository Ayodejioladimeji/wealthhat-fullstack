const router = require('express').Router();
const userCtrl = require('../controllers/userCtrl');
const { check } = require('express-validator');

router.post(
  '/register',
  check('email', 'Please include a valid email').isEmail(),
  check(
    'password',
    'Please enter a password with 6 or more characters'
  ).isLength({ min: 6 }),
  userCtrl.register
);

router.post('/activation', userCtrl.activateEmail);

router.post('/login', userCtrl.login);

router.post('/forgot', userCtrl.forgotPassword)

module.exports = router;
