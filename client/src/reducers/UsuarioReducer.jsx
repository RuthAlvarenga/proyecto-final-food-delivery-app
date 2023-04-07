
export const usuarioRegReducer = (state= {}, action) => {

    switch (action.type) 
    {
        case 'REGISTRO_USUARIO_REQ' : return {
            loading: true
        }
        case 'REGISTRO_USUARIO_OK' : return {
            loading: false,
            success: true
        }
        case 'REGISTRO_USUARIO_FALLO' : return {
            loading: false,
            error: action.payload
        }
        default: return state
    }
}

export const usuarioLoginReducer = (state= {}, action) => {

    switch (action.type) 
    {
        case 'LOGIN_USUARIO_REQ' : return {
            loading: true
        }
        case 'LOGIN_USUARIO_OK' : return {
            loading: false,
            success: true,
            currentUser: action.payload
        }
        case 'LOGIN_USUARIO_FALLO' : return {
            loading: false,
            error: action.payload
        }
        default: return state
    }
}

export const getAllUsersRed = ( state={users: []}, action) =>{
    switch (action.type) {
        case 'GET_ALL_USERS_REQ': return {
            loading: true,
            ...state
        }
        case 'GET_ALL_USERS_OK': return {
            loading: false,
            users: action.payload
        }
        case 'FAILED_GET_ALL_USERS': return {
            error: action.payload,
            loading: false
        }
        default: return state
    }
}