import axios from 'axios';

export const usuarioReg =(user)=> async dispatch =>{
    
    dispatch({type: 'REGISTRO_USUARIO_REQ'})

    try {
        const respuesta = await axios.post(`${process.env.REACT_APP_API_URL}/users/resgister`, user);
        console.log(respuesta);
        dispatch({type: 'REGISTRO_USUARIO_OK'})
        window.location.href='/'
    } catch (error) {
        dispatch({type: 'REGISTRO_USUARIO_FALLO', payload: error})
        console.log(error)
    }
}

export const usuarioLogin =(user)=> async dispatch =>{
    
    dispatch({type: 'LOGIN_USUARIO_REQ'})

    try {
        const respuesta = await axios.post(`${process.env.REACT_APP_API_URL}/users/login`, user);
        console.log(respuesta);
        dispatch({type: 'LOGIN_USUARIO_OK', payload:respuesta.data })
        localStorage.setItem('currentUser', JSON.stringify(respuesta.data))
        window.location.href='/'
    } catch (error) {
        dispatch({type: 'LOGIN_USUARIO_FALLO', payload: error})
        console.log(error)
    }
}

export const logoutUsuario =()=>dispatch=>{
    localStorage.removeItem('currentUser')
    localStorage.removeItem('ordenItems')
    window.location.href='/login'
}

export const getAllUsers = () => async dispatch => {
    dispatch({type:'GET_ALL_USERS_REQ'})

    try {
        const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/users/getallusers`)
        console.log(respuesta)
        dispatch({type:'GET_ALL_USERS_OK', payload: respuesta.data} )
    } catch (error) {
        dispatch({type:'FAILED_GET_ALL_USERS', payload: error })
    }

}

export const deleteUser = (userid) => async dispatch => {

    try {
        const respuesta = await axios.post(`${process.env.REACT_APP_API_URL}/users/deleteuser`, {userid})
        console.log(respuesta)
        alert('Se ha eliminado el usuario')
        window.location.reload()
    } catch (error) {
        alert ('Algo no funcionó')
        console.log(error)
    }

}