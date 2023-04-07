export const getAllMenusRed = ( state={menus: []}, action) =>{
    switch (action.type) {
        case 'GET_ALL_MENUS_REQ': return {
            loading: true,
            ...state
        }
        case 'GET_ALL_MENUS_OK': return {
            loading: false,
            menus: action.payload
        }
        case 'FAILED_GET_ALL_MENUS': return {
            error: action.payload,
            loading: false
        }
        default: return state
    }
}

export const addMenuRed = ( state={ }, action) =>{
    switch (action.type) {
        case 'ADD_MENU_REQ': return {
            loading: true,
            ...state
        }
        case 'ADD_MENU_OK': return {
            loading: false,
            success: true,
        }
        case 'ADD_MENUS_FALLO': return {
            error: action.payload,
            loading: false
        }
        default: return state
    }
}

export const getMenuIdRed = ( state={ }, action) =>{
    switch (action.type) {
        case 'GET_MENUID_REQ': return {
            loading: true,
            ...state
        }
        case 'GET_MENUID_OK': return {
            loading: false,
            menu: action.payload
        }
        case 'FAIL_GET_MENUID': return {
            error: action.payload,
            loading: false
        }
        default: return state
    }
}

export const  editMenuRed = ( state={ }, action) =>{
    switch (action.type) {
        case 'EDIT_MENU_REQ': return {
            editloading: true,
            ...state
        }
        case 'EDIT_MENU_OK': return {
            editloading: false,
            editsuccess: true,
        }
        case 'EDIT_MENUS_FALLO': return {
            editerror: action.payload,
            editloading: false
        }
        default: return state
    }
}