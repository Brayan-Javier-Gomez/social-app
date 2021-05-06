const express = require('express');
const body_parser = require('body-parser')
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

require('./config.js')

app.use(cors());

app.use(body_parser.urlencoded({ extended: false }));

app.use(body_parser.json())












mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useUnifiedTopology: true }, (err, resp) => {

    if (err) {

        console.log('La base de datos no esta en linea');

    }

    console.log('database listening in port 27017');

});



app.listen(process.env.PORT, () => {

    console.log(`Server listening in port ${process.env.PORT}`);

})