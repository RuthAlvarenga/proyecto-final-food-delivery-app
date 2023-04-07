import Swal from 'sweetalert2';
export const agregarOrden =(menu, quantity) =>( dispatch, getState )=>{


    let ordenItem = {
        name: menu.name,
        _id: menu._id,
        image: menu.image,
        quantity: Number(quantity),
        price: menu.price,
        prices: menu.price*quantity,
    }
    if(ordenItem.quantity>=10){
        Swal.fire({
            icon: 'error',
            text: '¡No se pueden agregar más de 10 pedidos a tu Orden!',
        })
    }
    dispatch({type: 'AGREGAR_ORDEN', payload: ordenItem })  // dispatch accion
    
        
    const ordenItems = getState().ordenRed.ordenItems
    localStorage.setItem('ordenItems', JSON.stringify(ordenItems))

}

export const eliminarOrden =(menu)=>(dispatch, getState)=>{

    dispatch({type:'ELIMINAR_ORDEN', payload:menu}) //Funcion de eliminar
    const ordenItems = getState().ordenRed.ordenItems
    localStorage.setItem('ordenItems', JSON.stringify(ordenItems)) //actualiza la localstore luego de eliminar la orden en la pagina 


}