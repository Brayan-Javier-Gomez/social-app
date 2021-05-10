const express = require('express');
const app = express();

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const userSchema = require('../models/user');

app.post('/login', (req, res) => {

    let body = req.body

    userSchema.findOne({ correo: body.correo }, (err, usuarioLogin) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err: 'err'
            })
        }

        if (!usuarioLogin) {

            return res.status(400).json({

                ok: false,
                err: {
                    message: 'usuario o contraseña incorrectos'

                }
            })
        }


        if (bcrypt.compareSync(body.password, usuarioLogin.password) === false) {

            return res.status(400).json({
                ok: false,
                err: {
                    message: 'usuario o contraseña incorrectos'
                }
            })

        }

        let token = jwt.sign({
            usuario: usuarioLogin
        }, process.env.SEED, { expiresIn: 60 * 60 * 24 * 30 * 12 })


        res.json({
            ok: true,
            usuario: usuarioLogin,
            token: token
        })



    })



})




module.exports = app