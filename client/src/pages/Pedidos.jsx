import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserPedido } from '../actions/PagoActions'
import Loading from '../components/Loading';
import Error from '../components/Error';
const Pedidos = () => {
    const dispatch = useDispatch();
    const pedidostate = useSelector(state => state.getUserPedidoMenusRed)
    const { pedidos, error, loading } = pedidostate
    useEffect(() => {

        dispatch(getUserPedido())
    }, [])

    return (
        <div style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h2 style={{ fontSize: '35px' }} >Mis pedidos</h2>
            <div className='row justify-content-center'>
                {loading && (<Loading />)}
                {error && (<Error error='Algo no funcionó' />)}
                {pedidos && pedidos.map(pedido => {
                    return <div className="col-md-8 m-2" style={{ backgroundColor: "#fec800", borderRadius: '10px' }}>
                        <div className="flex-container" style={{display:'flex', flexDirection: 'row'}}>
                            <div className='text-left w-100 mx-2'>
                                <h2 style={{ fontSize: '25px', marginBottom:'10px', borderBottom:'2px solid black', paddingTop: '10px'  }}>Items</h2>
                
                                {pedido.pedidoItems.map(item => {
                                    return <div>
                                        <p style={{ fontSize: '18px' }}>{item.name}*{item.quantity}={item.prices}</p>
                                    </div>
                                })}
                            </div>

                            <div className='text-left w-100 mx-2'>
                                <h2 style={{ fontSize: '25px' , marginBottom:'10px', borderBottom:'2px solid black', paddingTop: '10px'  }}>Dirección</h2>
                                
                                <p style={{ fontSize: '18px' }}>Dirección: {pedido.shippingAddress.direccion}</p>
                                <p style={{ fontSize: '18px' }}>Ciudad: {pedido.shippingAddress.city}</p>
                                <p style={{ fontSize: '18px' }}>País: {pedido.shippingAddress.country}</p>
                                <p style={{ fontSize: '18px' }}>PinCode: {pedido.shippingAddress.pincode}</p>
                            </div>

                            <div className='text-left w-100 mx-2'>
                                <h2 style={{ fontSize: '25px', marginBottom:'10px', borderBottom:'2px solid black', paddingTop: '10px' }}>Información del Pedido</h2>
                            
                                <p style={{ fontSize: '18px' }}>Total de la orden: {pedido.pedidoAmount}</p>
                                <p style={{ fontSize: '18px' }}>Fecha: {pedido.createdAt.substring(0, 10)}</p>
                                <p style={{ fontSize: '18px' }}>Id de la transacción: {pedido.transactionId}</p>
                                <p style={{ fontSize: '18px' }}>Id de la orden: {pedido._id}</p>
                            </div>
                        </div>
                    </div>
                })}

            </div>
        </div>
    )
}

export default Pedidos;