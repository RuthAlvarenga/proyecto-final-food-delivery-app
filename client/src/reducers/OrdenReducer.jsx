export const ordenRed = (state={ ordenItems:[]}, action) => {

    switch (action.type) 
        
        {
            case 'AGREGAR_ORDEN': 
            
            //se ve si el item esta presente en la orden o no, se crea una variable y se agrega la lógica, en IF si ya existe se actualiza, si no es fALSE yse crea una nueva orden
                                                    //si el item esta presente TRUE
            const existente = state.ordenItems.find(item=> item._id === action.payload._id);
            if(existente){

                return {
                    ...state,                       //si el item esta presente en la orden, se actuliza la cantidad de la orden al hacer click en el boton agregar orden
                    ordenItems : state.ordenItems.map(item=> item._id === action.payload._id? action.payload : item)

                }

            }else {
                return{
                    ...state,
                    ordenItems: [...state.ordenItems, action.payload]
                }
            }
            case 'ELIMINAR_ORDEN' : return {
                ...state,
                ordenItems: state.ordenItems.filter(item => item._id!== action.payload._id)
            }
    
            default: return state
        }
        
    
            
    
}