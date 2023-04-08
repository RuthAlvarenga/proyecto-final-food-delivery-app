import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Admin from '../../pages/Admin';
import { useDispatch, useSelector } from "react-redux";
import { editMenu, getMenuId } from '../../actions/MenuActions';
import Error from '../Error'
import Loading from '../Loading'
import Success from '../Success'

const EditMenu = () => {
    const {menuid} = useParams();
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');

    const getmenuidstate= useSelector(state=>state.getMenuIdRed);
    const {menu, error, loading} = getmenuidstate;

    const editmenustate = useSelector(state=>state.editMenuRed);
    const {editloading, editsuccess, editerror} = editmenustate;

    useEffect(() => {

        if(menu){
            if(menu._id === menuid){
                setName(menu.name)
                setPrice(menu.price)
                setCategory(menu.category)
                setImage(menu.image)
                setDescription(menu.description)
            }else{
                dispatch(getMenuId(menuid))
            }
            
        }else{
            dispatch(getMenuId(menuid))
        }

    }, [dispatch, menu])
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const editedmenu = {
            _id: menuid,
            name,
            price,
            category,
            image,
            description,
        }
        dispatch(editMenu(editedmenu))
    }

    return (
        <div>
            <Admin />
            <div className='d-flex flex-column align-items-center p-3'>
                <h2>Editar Menu</h2>

                {loading && (<Loading />)}
                {error && (<Error error='Algo fue mal'/>)}
                {editsuccess && (<Success success='Los detalles del menu se han actualizado'/>)}
                {editloading && (<Loading />)}

                <form onSubmit={onSubmitHandler} className='col-md-10 shadow-lg p-3 mb-5 bg-white rounded'>
                    <input className='form-control mb-3' type='text' placeholder='Nombre' value={name} onChange={(e)=>{setName(e.target.value)}}/>
                    <input className='form-control mb-3' type='text' placeholder='Precio' value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
                    <input className='form-control mb-3' type='text' placeholder='Categoría' value={category} onChange={(e)=>{setCategory(e.target.value)}}/>
                    <input className='form-control mb-3' type='text' placeholder='Imagen Url' value={image} onChange={(e)=>{setImage(e.target.value)}}/>
                    <input className='form-control' type='text' placeholder='Descripción' value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
                    <button className='btn btn-warning mt-3' type='submit'>Editar</button>
                </form>
            </div>

        </div>
    )
}

export default EditMenu;