import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { placeOrder } from '../actions/PagoActions';
import Loading from './Loading'
import Success from './Success'
import Error from './Error'
import { eliminarOrden } from '../actions/OrdenActions';
import Swal from 'sweetalert2';
const Checkout = ({pagTotal}) => {
    
    const pedidostate = useSelector((state)=> state.placeOrderReducer )
    const {loading, error, success} = pedidostate
    const ordenstate = useSelector(state => state.ordenRed);
    const ordenItems = ordenstate.ordenItems;
    const loginstate= useSelector(state=>state.usuarioLoginReducer)
    const {currentUser} = loginstate
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
            disabled={ordenItems.length === 0 || !currentUser}
            >
                <Button type='button'
                    variant='primary'
                    className='btn btn-warning'
                    disabled={ordenItems.length === 0 || !currentUser }
                    
                    >
                    Pagar
                </Button>
                {!currentUser && (
                <div className='text-center p-2 my-2 bg-danger text-white fw-bold '>
                    <p>Por favor, inicie sesión para hacer un pago.</p>
                </div>
            )}
            </StripeCheckout>
        </div>
    )
}

export default Checkout;