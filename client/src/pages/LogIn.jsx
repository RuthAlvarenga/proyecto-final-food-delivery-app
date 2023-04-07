import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import {usuarioLogin} from '../actions/UsuarioActions'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading'
import Success from '../components/Success'
import Error from '../components/Error'

const LogIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginstate= useSelector(state=>state.usuarioLoginReducer)
    const {loading, success, error} = loginstate
    const dispatch = useDispatch();

    
    useEffect(() => {
        if(localStorage.getItem('currentUser')){
            navigate('/')
        }
    }, [navigate]);
    

    function login(){

        const user = { email, password }
        console.log(user)
        dispatch(usuarioLogin(user))
    }
    return (
    <div className='row justify-content-center mt-5'>
        
        <div className='col-md-5 shadow-lg p-3 mb-5 bg-white rounded'>
            <p style={{ fontSize: '30px', textAlign: 'center' }}>Iniciar Sesión</p>
            {loading && (<Loading />)}
            {success && (<Success success='Has iniciado sesión correctamente!'/>)}
            {error && (<Error error='Datos invalidos'/>)}
            <div>
                <label>Email</label>
                <input type='email' name='email' value={email} className='form-control' placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} />

            </div>

            <div>
                <label>Contraseña</label>
                <input type='password' name='password' value={password} className='form-control' placeholder='Contraseña' onChange={(e) => { setPassword(e.target.value) }} />

            </div>

            <button className='btn btn-warning mt-3 mb-3' onClick={login}>logIn</button>
            <br/>
            <Link  to={'/usuario'}>¿No tienes una cuenta?  Registrarse</Link>
        </div>
    </div>
    )
}

export default LogIn;