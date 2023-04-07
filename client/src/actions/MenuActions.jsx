//Actions para traer los datos del back-end al front-end / Actions relacionadas a Menu get, delete, etc.
import axios from "axios";
import Swal from 'sweetalert2';
//nombre de la acción----------función dispatch----dentro se escribe la lógica
export const getAllMenus = () => async dispatch => {
    dispatch({type:'GET_ALL_MENUS_REQ'})

    try {
        const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/menus/getmenus`)
        console.log(respuesta)
        dispatch({type:'GET_ALL_MENUS_OK', payload: respuesta.data} )
    } catch (error) {
        dispatch({type:'FAIL_GET_ALL_MENUS', payload: error })
    }

}

export const addMenu = (menu) => async dispatch => {
    dispatch({type:'ADD_MENU_REQ'})

    try {
        const respuesta = await axios.post(`${process.env.REACT_APP_API_URL}/menus/addmenu`, {menu})
        console.log(respuesta)
        dispatch({type:'ADD_MENU_OK'})
        window.location.href='/listmenu'
    } catch (error) {
        dispatch({type:'ADD_MENUS_FALLO', payload: error })
    }

}

export const getMenuId = (menuid) => async dispatch => {
    dispatch({type:'GET_MENUID_REQ'})

    try {
        const respuesta = await axios.post(`${process.env.REACT_APP_API_URL}/menus/getmenuid`, {menuid})
        console.log(respuesta)
        dispatch({type:'GET_MENUID_OK', payload: respuesta.data} )
    } catch (error) {
        dispatch({type:'FAIL_GET_MENUID', payload: error })
    }

}

export const editMenu = (editedmenu) => async dispatch => {
    dispatch({type:'EDIT_MENU_REQ'})

    try {
        const respuesta = await axios.post(`${process.env.REACT_APP_API_URL}/menus/editmenu`, {editedmenu})
        console.log(respuesta)
        dispatch({type:'EDIT_MENU_OK'})
        window.location.href='/listmenu'
    } catch (error) {
        dispatch({type:'EDIT_MENUS_FALLO', payload: error })
    }

}

export const deleteMenu = (menuid) => async dispatch => {

    try {
        const respuesta = await axios.post(`${process.env.REACT_APP_API_URL}/menus/deletemenu`, {menuid})
        Swal.fire({
            icon: 'success',
            text: 'Se ha eliminado el menu',
        })
        console.log(respuesta);
        window.location.reload()
    } catch (error) {
        Swal.fire({
            icon: 'error',
            text: 'Algo fue mal, no se pudo eliminar el menu',
        })
        console.log(error);
    }

}
