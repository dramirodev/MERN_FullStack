const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { validationResult } = require('express-validator');

const signUp = async (req, res) => {

    const error = validationResult(req);

    if (!error.isEmpty()) {
        return res.status(400).json({ errores: error.array() });
    }

    try {
        const { name, lastname, email, password, repeatPassword } = req.body;
        const usuarioExsist = await User.findOne({email});

        if (password !== repeatPassword) {
            throw new Error('Los passwords no coinciden');
        }

        if (usuarioExsist) {
            throw new Error('El usuario ya existe');
        }

        const user = new User();
        user.name = name;
        user.lastname = lastname;
        user.email = email;
        user.role = "admin";
        user.active = false;
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        user.save().then(user => res.status(200).send({ user })).catch(_ => {
            res.status(404).send({ message: 'el usuario no ha podido ser creado' });
        });
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    signUp
}
