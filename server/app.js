const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT_SERVER = process.env._SERVER || 3977;
const app = express();

//Load router
const userRoutes = require('./routers/user');
const API_VERSION = 'v1';

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT_SERVER, () => {
    console.log(`El servidor está funcionando en el puerto http://${process.env.DB_SERVER}:${PORT_SERVER}/api/${process.env.API_VERSION}/`);
});

// Configurar Headers


// Basics Router
app.use(`/api/${API_VERSION}`, userRoutes);

module.exports = app;
