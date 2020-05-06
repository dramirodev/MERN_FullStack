const express = require('express');
const userController = require('../controllers/user');
const api = express.Router();
const { check } = require('express-validator');

api.post('/sign-up', [
    check('name').not().isEmpty(),
    check('lastname').not().isEmpty(),
    check('email').isEmail().not().isEmpty(),
    check('password').isLength({ min: 6 }).notEmpty(),
    check('repeatPassword').isLength({min: 6}).notEmpty()
], userController.signUp);

module.exports = api;
