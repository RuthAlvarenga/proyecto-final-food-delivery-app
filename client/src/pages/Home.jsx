import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Menu from '../components/Menu'
import { getAllMenus } from '../actions/MenuActions'
import Loading from '../components/Loading'
import Error from '../components/Error'

const Home = () => {
    const dispatch = useDispatch();

    const menusState = useSelector(state => state.getAllMenusRed)

    const { menus, error, loading } = menusState;

    useEffect(() => {
        dispatch(getAllMenus())
    }, [])
    return (
        <div className='justify-content-center'>

            {
                loading ?
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Loading />
                    </div>
                    : error ?
                    <div>
                        <Error error='Algo fue mal al tratar de mostrar los datos' />
                    </div>
                        
                        :
                        <div className='row justify-content-center'>
                            {menus.map(menu => {
                                return (<div className='col-md-3 m-3' key={menu._id}>
                                    <div >
                                        <Menu menu={menu} />
                                    </div>
                                </div>);
                            })}
                        </div>
            }
        </div>
    )
}

export default Home;

