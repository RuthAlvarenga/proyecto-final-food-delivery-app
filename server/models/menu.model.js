
const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, 'Es requerida']
    },
    price: {type: Number},
    category:{
        type: String,
        required: [true, 'Es requerida']
    },
    image: {
        type: String,
        required: [true, 'Es requerida']
    },
    description: {
        type: String,
        required: [true, 'Es requerida']
    }
}, { timestamps: true });
module.exports.Menu = mongoose.model('Menu', MenuSchema);