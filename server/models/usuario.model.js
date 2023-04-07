const mongoose = require('mongoose');



const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "El nombre es requerido"],
        minlength: [3, "Debe tener minimo 3 caracteres!"]
    },
    lastname: {
        type: String,
        required: [true, "El nombre es requerido"],
        minlength: [3, "Debe tener minimo 3 caracteres!"]
    },
    email: {
        type: String,
        required: [true, "Email es requerido"],
        validate: {                                  //validación del email 
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Ingrese un email valido"
        }
    },
    password: {
        type: String,
        required: [true, "Contraseña es requerida"],
        minlength: [6, "La contraseña no puede ser menor a 6 caracteres"]
    },
    isAdmin: {type: Boolean, required: true, default: false}
}, { timestamps: true });

module.exports.User = mongoose.model('User', UserSchema)

