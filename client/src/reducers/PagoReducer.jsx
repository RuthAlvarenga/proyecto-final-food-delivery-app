
export const  placeOrderReducer = (state= {}, action) => {

    switch (action.type) 
    {
        case 'PLACE_ORDER_REQ' : return {
            loading: true
        }
        case 'PLACE_ORDER_OK' : return {
            loading: false,
            success: true
        }
        case 'PLACE_ORDER_FALLO' : return {
            loading: false,
            error: action.payload
        }
        default: return state
    }
}

export const getUserPedidoMenusRed = ( state={pedidos: []}, action) =>{
    switch (action.type) {
        case 'GET_USER_PEDIDO_REQ': return {
            loading: true,
            ...state
        }
        case 'GET_USER_PEDIDO_OK': return {
            loading: false,
            pedidos: action.payload
        }
        case 'FALLO_GET_USER_PEDIDO': return {
            error: action.payload,
            loading: false
        }
        default: return state
    }
}

export const getAllPedidosRed = ( state={pedidos: []}, action) =>{
    switch (action.type) {
        case 'GET_ALL_PEDIDOS_REQ': return {
            loading: true,
            ...state
        }
        case 'GET_ALL_PEDIDOS_OK': return {
            loading: false,
            pedidos: action.payload
        }
        case 'FALLO_GET_ALL_PEDIDOS': return {
            error: action.payload,
            loading: false
        }
        default: return state
    }
}
