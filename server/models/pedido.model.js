const mongoose = require('mongoose');

const PedidoSchema = new mongoose.Schema ({
    name: {
        type: String, 
        required: [true, 'Es requerida']
    },
    email: {
        type: String, 
        required: [true, 'Es requerida']
    },
    userid: {
        type: String, 
        required: [true, 'Es requerida']
    },
    pedidoItems: [],
    shippingAddress: {
        type: Object
    },
    pedidoAmount:{
        type: Number, 
        required: [true, 'Es requerida']
    },
    isDelivered:{
        type: Boolean, 
        required: [true, 'Es requerida'],
        default: false
    },
    transactionId:{
        type: String, 
        required: [true, 'Es requerida']
    },
},  { timestamps: true });
module.exports.Pedido = mongoose.model('Pedido', PedidoSchema)