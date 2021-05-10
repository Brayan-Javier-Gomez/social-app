const express = require('express');
const app = express();
const userSchema = require('../models/user');
const bcrypt = require('bcrypt');


app.get('/user', (req, res) => {

    userSchema.find()

    .exec((err, usuarios) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }

        if (!usuarios) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'No se han encontrado registros'
                }
            })
        }

        res.json({
            ok: true,
            usuarios: usuarios
        })



    })
})


app.post('/user', (req, res) => {
    body = req.body;

    let user = new userSchema({

        nombre: body.nombre,

        correo: body.correo,

        imagen: body.imagen,

        password: bcrypt.hashSync(body.password, 10)

    });

    user.save((err, usuarioDB) => {

        if (err) {

            return res.status(400).json({

                ok: false,

                err

            })
        }

        if (!usuarioDB) {

            return res.status(400).json({

                ok: false,

                err: {

                    message: 'Ha ocurrido un error, intente mas tarde'

                }

            })
        }

        res.json({
            ok: true,

            usuario: usuarioDB

        })


    })

})



app.put('/user/:id', (req, res) => {

    body = req.body;

    id = req.params.id

    // newBody = {
    //     nombre: body.nombre,
    //     correo: body.correo,
    //     password: bcrypt.hashSync(body.password, 10)
    // }


    userSchema.findByIdAndUpdate(id, body, { new: true }, (err, usuarioDB) => {

        if (err) {

            return res.status(400).json({

                ok: false,

                err
            })

        }

        if (!usuarioDB) {

            return res.status(400).json({

                ok: false,

                err: {

                    message: 'No se ha podido actualizar el usuario'

                }
            })

        }

        res.json({

            ok: true,

            usuario: usuarioDB

        })


    })

})



app.delete('/user/:id', (req, res) => {

    let id = req.params.id


    userSchema.findByIdAndDelete(id, (err, usuarioDel) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }

        if (!usuarioDel) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'No se ha eliminado el usuario'
                }
            })
        }


        res.json({
            ok: true,
            usuario_eliminado: usuarioDel
        })
    })

})


module.exports = app;