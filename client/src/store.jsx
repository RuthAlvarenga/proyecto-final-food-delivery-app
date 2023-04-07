import {combineReducers} from 'redux';
import{ legacy_createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension'
import { getAllMenusRed, addMenuRed, getMenuIdRed, editMenuRed } from './reducers/MenuReducer';
import { ordenRed } from './reducers/OrdenReducer';
import { getAllUsersRed, usuarioRegReducer } from './reducers/UsuarioReducer';
import { usuarioLoginReducer } from './reducers/UsuarioReducer';
import { placeOrderReducer, getUserPedidoMenusRed, getAllPedidosRed } from './reducers/PagoReducer';
const reducerFinal = combineReducers ({
    getAllMenusRed: getAllMenusRed,
    ordenRed:  ordenRed,
    usuarioRegReducer: usuarioRegReducer,
    usuarioLoginReducer:  usuarioLoginReducer,
    placeOrderReducer: placeOrderReducer,
    getUserPedidoMenusRed: getUserPedidoMenusRed,
    addMenuRed: addMenuRed, 
    getMenuIdRed: getMenuIdRed,
    editMenuRed: editMenuRed,
    getAllPedidosRed: getAllPedidosRed,
    getAllUsersRed: getAllUsersRed,
}) 


const ordenItems = localStorage.getItem('ordenItems') ? JSON.parse(localStorage.getItem('ordenItems')) : []
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

const inicialState = {
    ordenRed: {
        ordenItems: ordenItems
    },
    usuarioLoginReducer: {
        currentUser: currentUser
    }
}

const composeEnhacers = composeWithDevTools({})
const store = legacy_createStore(reducerFinal, inicialState, composeEnhacers(applyMiddleware(thunk)))

export default store; 