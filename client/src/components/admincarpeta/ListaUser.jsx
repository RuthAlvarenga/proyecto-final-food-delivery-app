import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Admin from '../../pages/Admin';
import Loading from '../Loading'
import Error from '../Error'
import { deleteUser, getAllUsers } from '../../actions/UsuarioActions';
const ListaUser = () => {
    const dispatch = useDispatch();
    const userstate = useSelector(state=> state.getAllUsersRed);
    const {error, loading, users} = userstate;
    useEffect(() => {
        dispatch(getAllUsers())
    }, [])
    
    return (
        <div>
            <Admin />
            <div className='d-flex flex-column align-items-center'>
                <h2 style={{ fontSize: '20px', textAlign: 'center' }}>Lista de Usuarios</h2>
                {loading && (<Loading />)}
                {error && (<Error error='Algo fue mal' />)}
                <div className='col-md-10'>
                    <table className='table table-striped table-hover table-bordered '>
                        <thead>
                            <tr>
                                <th>Usuario Id</th>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users && users.map(user=>{
                                return<tr>
                                    <td>{user._id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td><i className="fa-solid fa-trash m-2" onClick={()=>{dispatch(deleteUser(user._id))}}></i></td>
                                </tr>
                            })}
                            
                        </tbody>
                    </table>

                </div>

            </div>
        </div>
    )
}

export default ListaUser;