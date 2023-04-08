import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link} from 'react-router-dom';
import './Admin.css';

const Admin = () => {

    const userstate = useSelector(state => state.usuarioLoginReducer);
    const { currentUser } = userstate;
    const dispatch = useDispatch();

    useEffect(() => {
        if (!currentUser.isAdmin) {
            window.location.href = '/'
        }
    }, [])

    return (
        <div className='d-flex flex-column align-items-center'>
            <div className='col-md-10'>
                <h2 style={{ fontSize: '35px', marginBottom: '20px' }}>Panel del Administrador</h2>

                <ul className='admin'>
                    <li><Link style={{ textDecoration: 'none', color: 'black', fontSize:'20px', fontWeight: 'bold' }} to={'/listuser'}>Lista de Usuarios</Link></li>
                    <li><Link style={{ textDecoration: 'none', color: 'black', fontSize:'20px', fontWeight: 'bold'}} to={'/listmenu'}>Lista de Menus</Link></li>
                    <li><Link style={{ textDecoration: 'none', color: 'black', fontSize:'20px', fontWeight: 'bold' }} to={'/addmenu'}>Agregar un nuevo Menu</Link></li>
                    <li><Link style={{ textDecoration: 'none', color: 'black', fontSize:'20px', fontWeight: 'bold'  }} to={'/listpedido'}>Lista de Pedidos</Link></li>
                </ul>

            </div>

        </div>
    )
}

export default Admin;