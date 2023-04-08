import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import {usuarioLogin} from '../actions/UsuarioActions'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import Success from '../components/Success';
import Error from '../components/Error';
import profile from './userimg/profile.png';

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
            <div style={{display: 'flex', justifyContent: 'center'}}>
                    <img src={profile} className='img mt-2' style={{width: "100px", height: "100px"}} />
            </div>
            <p style={{ fontSize: '30px', textAlign: 'center', fontWeight: 'bold'  }}>Iniciar Sesión</p>
            {loading && (<Loading />)}
            {success && (<Success success='Has iniciado sesión correctamente!'/>)}
            {error && (<Error error='Datos invalidos'/>)}
            <div>
                <label style={{fontWeight: 'bold' }}>Email</label>
                <input type='email' name='email' value={email} className='form-control' placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} />

            </div>

            <div>
                <label style={{fontWeight: 'bold' }}>Contraseña</label>
                <input type='password' name='password' value={password} className='form-control' placeholder='Contraseña' onChange={(e) => { setPassword(e.target.value) }} />

            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <button className='btn btn-warning mt-3 mb-3 w-100 fw-bold' onClick={login}>Iniciar Sesión</button>
            </div>
            
            <br/>
            <Link  to={'/usuario'} style={{fontWeight: 'bold' }}>¿No tienes una cuenta?  Registrarse</Link>
        </div>
    </div>
    )
}

export default LogIn;