require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const puerto = process.env.PUERTO;

require('./config/mongoose.config');

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

const menusRoute = require('./routes/routes')
const userRoute = require('./routes/user.routes')
const pagoRoute = require ('./routes/pago.routes')
app.use('/api/menus/', menusRoute)
app.use('/api/users/', userRoute)
app.use('/api/orders/', pagoRoute)
app.listen(puerto, () => {
    console.log("Listening at Port " +puerto);
});