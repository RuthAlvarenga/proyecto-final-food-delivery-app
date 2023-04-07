import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Admin from '../../pages/Admin';
import Loading from '../Loading'
import Error from '../Error'
import { deleteMenu, getAllMenus } from '../../actions/MenuActions'
import { Link } from 'react-router-dom';
const ListaMenu = () => {
    const dispatch = useDispatch();

    const menusState = useSelector(state => state.getAllMenusRed)

    const { menus, error, loading } = menusState;

    useEffect(() => {
        dispatch(getAllMenus())
    }, [])

    return (
        <>
            <Admin />
            <div className='d-flex flex-column align-items-center'>
                <div className='col-md-10'>
                    <h2 style={{ fontSize: '20px', textAlign: 'center' }}>Lista de Menus</h2>
                    {loading && (<Loading />)}
                    {error && (<Error error='Algo fue mal' />)}
                    <table className='table table-striped table-hover table-bordered '>
                        <thead style={{ height: '40px' }}>
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Actions</th>
                            </tr>


                        </thead>
                        <tbody>
                            {menus && menus.map(menu => {
                                return <tr key={menu._id}>
                                    <td>{menu.name}</td>
                                    <td>{menu.price}</td>
                                    <td>
                                        <i className="fa-solid fa-trash m-2" onClick={()=>{dispatch(deleteMenu(menu._id))}}></i>
                                        <Link to={`/edit/${menu._id}`}><i className="fa-solid fa-edit m-2"></i></Link>
                                    </td>
                                </tr>
                            })}
                        </tbody>

                    </table>

                </div>
            </div>


        </>
    )
}

export default ListaMenu;