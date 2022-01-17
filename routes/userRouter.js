const router = require('express').Router();
const userCtrl = require('../controllers/userCtrl');
const { check } = require('express-validator');
const auth = require('../middlewares/auth');

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

router.post('/refresh_token', userCtrl.getAccessToken);

router.post('/forgot', userCtrl.forgotPassword);

router.post('/reset', auth, userCtrl.resetPassword);

router.get('/user', auth, userCtrl.getUser);

router.patch('/update', auth, userCtrl.updateUser);

module.exports = router;
