import React, { useEffect, useState } from 'react'
import Admin from '../../pages/Admin';
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../Loading'
import Error from '../Error'
import { entregarPedido, getAllPedidos } from '../../actions/PagoActions';

const ListaPedidos = () => {
    const dispatch = useDispatch();
    const getpedidosstate = useSelector(state => state.getAllPedidosRed);
    const { loading, error, pedidos } = getpedidosstate;
    useEffect(() => {
        dispatch(getAllPedidos())
    }, [])

    return (
        <div>
            <Admin />
            <div className='d-flex flex-column align-items-center'>
                <div className='col-md-10'>
                    <h2 style={{ fontSize: '20px', textAlign: 'center' }}>Lista de Pedidos</h2>
                    {loading && (<Loading />)}
                    {error && (<Error error='Algo fue mal' />)}
                    <table className='table table-striped table-hover table-bordered '>
                        <thead>
                            <tr>
                                <th>Pedido Id</th>
                                <th>Email</th>
                                <th>Usuario Id</th>
                                <th>Costo</th>
                                <th>Fecha</th>
                                <th>Estatus</th>
                            </tr>
                        </thead>
                        <tbody>

                            {pedidos && pedidos.map(pedido => {
                                return <tr>
                                    <td>{pedido._id}</td>
                                    <td>{pedido.email}</td>
                                    <td>{pedido.userid}</td>
                                    <td>{pedido.pedidoAmount}</td>
                                    <td>{pedido.createdAt.substring(0, 10)}</td>
                                    <td>
                                        {pedido.isDelivered ? 
                                        (<h2 style={{ fontSize: '18px' }}>Entregado</h2>) 
                                        : 
                                        (<button onClick={()=>{dispatch(entregarPedido(pedido._id))}} className='btn btn-danger'>Entregar</button>)
                                        }
                                    </td>
                                </tr>
                            })}


                        </tbody>
                    </table>
                </div>

            </div>


        </div>
    )
}

export default ListaPedidos;