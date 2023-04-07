import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { placeOrder } from '../actions/PagoActions';
import Loading from './Loading'
import Success from './Success'
import Error from './Error'
import { eliminarOrden } from '../actions/OrdenActions';

const Checkout = ({pagTotal}) => {
    const pedidostate = useSelector((state)=> state.placeOrderReducer )
    const {loading, error, success} = pedidostate
    const ordenstate = useSelector(state => state.ordenRed);
    const ordenItems = ordenstate.ordenItems;
    const dispatch = useDispatch();
    const tokenHandler =(token) => {
        console.log(token);
        dispatch(placeOrder(token, pagTotal))
    }
   

    return (
        <div>

                {loading && (<Loading />)}
                {success && (<Success success='Su pedido se ha realizado con éxito!'/>)}
                {error && (<Error error='Algo fue mal, no se ha podido añadir su pedido'/>)}
            <StripeCheckout 
            amount={pagTotal}
            billingAddress
            shippingAddress
            token={tokenHandler}
            stripeKey='pk_test_51MrWNiLRJMywnLWXI7aJwCIXOhwhpRXYn7UmCmboksdFAKQpdgKa9joPbKIIVCVbS5CmK9nHH11HGbE65JPCtdLc00yTpR49RL'
            currency='PYG'
            disabled={ordenItems.length === 0}
            >
                <Button type='button'
                    variant='primary'
                    className='btn btn-warning'
                    disabled={ordenItems.length === 0}
                    >
                    Pagar
                </Button>
            </StripeCheckout>
        </div>
    )
}

export default Checkout;