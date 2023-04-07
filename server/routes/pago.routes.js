const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const stripe = require("stripe")("sk_test_51MrWNiLRJMywnLWXk18ARu1zn7UhLQRmZvjJCmwjld16a5NGnjCNP3MBuHkw2rFbSeE28Dxk4ukjtEsEz3vFbqGx007awpZEBC")
const {Pedido} = require('../models/pedido.model')
router.post('/placeorder', async (request, response) => {

    const { token, pagTotal, currentUser, ordenItems } = request.body;

    try {
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        });
        const payment = await stripe.charges.create({
            amount: pagTotal,
            currency: 'pyg',
            customer: customer.id,
            receipt_email: token.email
        }, {
            idempotencyKey: uuidv4()
        });
        if (payment) {
            const newpedido = new Pedido({
                name: currentUser.name,
                email: currentUser.email,
                userid: currentUser._id,
                pedidoItems: ordenItems,
                pedidoAmount: pagTotal,
                shippingAddress: {
                    direccion: token.card.address_line1,
                    city: token.card.address_city,
                    country: token.card.address_country,
                    pincode: token.card.address_zip,
                },
                transactionId: payment.source.id,
            })
            newpedido.save();
            response.send('Pedido realizado correctamente')
        } else {
            response.send('Pago Falló')
        }
    } catch (error) {
        response.status(400).json({ message: 'algo no funcionó', error })
        console.log(error)
    }

}
);

router.post('/getuserpedido', async (request, response) => {
    const {userid} = request.body;
    try {
        const pedidos = await Pedido.find({userid: userid}).sort({_id: -1})
        response.send(pedidos)
    } catch (error) {
        response.status(400).json({ message: 'algo no funcionó', error })
    }
})

router.get('/getallpedidos', async (request, response) => {
    
    try {
        const pedidos = await Pedido.find({})
        response.send(pedidos)
    } catch (error) {
        response.status(400).json({ message: error })
    }
})

router.post('/entregarpedido', async (request, response) => {
    const pedidoid = request.body.pedidoid;
    try {
        const pedido = await Pedido.findOne({_id: pedidoid})
        pedido.isDelivered = true; 
        await pedido.save();
        response.send('Se ha entregado el pedido')
    } catch (error) {
        response.status(400).json({ message:'Algo fue mal'})
    }
})
module.exports = router;