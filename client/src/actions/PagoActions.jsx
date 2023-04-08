import axios from 'axios'
import Swal from 'sweetalert2';
export const placeOrder = (token, pagTotal) =>async (dispatch, getState)=>{

    dispatch({type: 'PLACE_ORDER_REQ'})
    const currentUser= getState().usuarioLoginReducer.currentUser;
    const ordenItems= getState().ordenRed.ordenItems;
    
    try {
        const respuesta = await axios.post(`${process.env.REACT_APP_API_URL}/orders/placeorder`, {token, pagTotal, currentUser, ordenItems})
        dispatch({type: 'PLACE_ORDER_OK'})
        console.log(respuesta)
        localStorage.removeItem('ordenItems')
        window.location.href='/'
    } catch (error) {
        dispatch({type: 'PLACE_ORDER_FALLO'})
        console.log(error)

    }



}

export const getUserPedido = () => async (dispatch, getState) => {

    const currentUser = getState().usuarioLoginReducer.currentUser;
    dispatch({type:'GET_USER_PEDIDO_REQ'})

    try {
        const respuesta = await axios.post(`${process.env.REACT_APP_API_URL}/orders/getuserpedido`, {userid: currentUser._id})
        console.log(respuesta)
        dispatch({type:'GET_USER_PEDIDO_OK', payload: respuesta.data} )
    } catch (error) {
        dispatch({type:'FALLO_GET_USER_PEDIDO', payload: error })
    }

}

export const getAllPedidos = () => async (dispatch, getState) => {

    const currentUser = getState().usuarioLoginReducer.currentUser;
    dispatch({type:'GET_ALL_PEDIDOS_REQ'})

    try {
        const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/orders/getallpedidos`)
        console.log(respuesta)
        dispatch({type:'GET_ALL_PEDIDOS_OK', payload: respuesta.data} )
    } catch (error) {
        dispatch({type:'FALLO_GET_ALL_PEDIDOS', payload: error })
    }

}

export const entregarPedido = (pedidoid) => async (dispatch, getState) => {

    
    dispatch({type:'GET_ALL_PEDIDOS_REQ'})

    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/orders/entregarpedido`, {pedidoid})
        console.log(response);
        alert('Pedido Entregado');
        const pedidos = await axios.get(`${process.env.REACT_APP_API_URL}/orders/getallpedidos`)
        dispatch({type:'GET_ALL_PEDIDOS_OK', payload: pedidos.data} )
    } catch (error) {
        console.log(error);
    }

}