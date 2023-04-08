import React, { useState } from 'react'
import Admin from '../../pages/Admin';
import { addMenu } from '../../actions/MenuActions';
import { useDispatch, useSelector } from 'react-redux';
import Error from '../Error'
import Loading from '../Loading'
import Success from '../Success'
const AddMenu = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');

    const dispatch = useDispatch();

    const addmenuState = useSelector(state => state.addMenuRed)

    const { success, error, loading } = addmenuState;


    const onSubmitHandler = (e) => {
        e.preventDefault();
        const menu = {
            name,
            price,
            category,
            image,
            description,
        }
        console.log(menu);
        dispatch(addMenu(menu));
    }
    return (
        <div>
            <Admin />
            <div className='d-flex flex-column align-items-center p-3'>
                <h2>Agregar nuevo Menu</h2>

                {loading && (<Loading />)}
                {success && (<Success success='Se ha agregado el nuevo menu correctamente!'/>)}
                {error && (<Error error='Algo fue mal'/>)}

                <form onSubmit={onSubmitHandler} className='col-md-10 shadow-lg p-3 mb-5 bg-white rounded'>
                    <input className='form-control mb-3' type='text' placeholder='Nombre' value={name} onChange={(e)=>{setName(e.target.value)}}/>
                    <input className='form-control mb-3' type='text' placeholder='Precio' value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
                    <input className='form-control mb-3' type='text' placeholder='Categoría' value={category} onChange={(e)=>{setCategory(e.target.value)}}/>
                    <input className='form-control mb-3' type='text' placeholder='Imagen Url' value={image} onChange={(e)=>{setImage(e.target.value)}}/>
                    <input className='form-control' type='text' placeholder='Descripción' value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
                    <button className='btn btn-warning mt-3' type='submit'>Agregar Menu</button>
                </form>
            </div>
        </div>
    )
}

export default AddMenu;