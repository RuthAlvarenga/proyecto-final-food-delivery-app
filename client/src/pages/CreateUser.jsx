import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {usuarioReg} from '../actions/UsuarioActions'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Loading from '../components/Loading';
import Success from '../components/Success';
import Error from '../components/Error';
import profile from './userimg/profile.png';

const CreateUser = () => {
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const registerstate = useSelector(state=>state.usuarioRegReducer)
    const {error,loading, success} = registerstate

    const dispatch = useDispatch();

    function register(){
        if(password !== confirmPassword){
            Swal.fire({
                icon: 'error',
                title: '¡error!',
                text: '¡Las contraseñas no coinciden!',
            })
        }
        const user = {
            name,
            lastname,
            email,
            password,
        }
        console.log(user)
        dispatch(usuarioReg(user))

    }

    return (
        <div className='row justify-content-center'>
            <div className='col-md-5 shadow-lg p-3 mb-5 bg-white rounded' >

                {loading && (<Loading />)}
                {success && (<Success success='El usuario se ha registrado!'/>)}
                {error && (<Error error='el email ya se encuentra registrado'/>)}
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <img src={profile} className='img mt-2' style={{width: "100px", height: "100px"}} />
                </div>
                
                <p style={{ fontSize: '30px', textAlign: 'center', fontWeight: 'bold' }}>Crear Usuario</p>
                <div >
                    <label style={{fontWeight: 'bold' }}>Nombre</label>
                    <input required type='text' name='name' value={name} className='form-control' placeholder='Nombre' onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div >
                    <label style={{fontWeight: 'bold' }}>Apellido</label>
                    <input required type='text' name='lastname' value={lastname} className='form-control' placeholder='Apellido' onChange={(e) => { setLastname(e.target.value) }} />

                </div>
                <div >
                    <label style={{fontWeight: 'bold' }}>Email</label>
                    <input required type='email' name='email' value={email} className='form-control' placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} />

                </div>

                <div >
                    <label style={{fontWeight: 'bold' }}>Contraseña</label>
                    <input required type='password' name='password' value={password} className='form-control' placeholder='Contraseña' onChange={(e) => { setPassword(e.target.value) }} />

                </div>
                <div >
                    <label style={{fontWeight: 'bold' }}>Confirme Contraseña</label>
                    <input required type='password' name='confirmPassword' value={confirmPassword} className='form-control' placeholder='Confirme Contraseña' onChange={(e) => { setConfirmPassword(e.target.value) }} />

                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <button onClick={register} style={{ marginTop: '20px', marginBottom:'20px'}} className='btn btn-warning w-100 fw-bold'>Registrarse</button>
                </div>
                
                <br/>
                <Link to={'/login'} style={{fontWeight: 'bold' }}>¿Ya tiene una cuenta? Iniciar sesión</Link>
            </div>
        </div>
    )
}

export default CreateUser;