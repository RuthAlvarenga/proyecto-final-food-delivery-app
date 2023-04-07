import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {usuarioReg} from '../actions/UsuarioActions'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Loading from '../components/Loading'
import Success from '../components/Success'
import Error from '../components/Error'
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

                <p style={{ fontSize: '30px', textAlign: 'center' }}>Crear Usuario</p>
                <div >
                    <label>Nombre</label>
                    <input required type='text' name='name' value={name} className='form-control' placeholder='Nombre' onChange={(e) => { setName(e.target.value) }} />


                </div>
                <div >
                    <label>Apellido</label>
                    <input required type='text' name='lastname' value={lastname} className='form-control' placeholder='Apellido' onChange={(e) => { setLastname(e.target.value) }} />

                </div>
                <div >
                    <label>Email</label>
                    <input required type='email' name='email' value={email} className='form-control' placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} />

                </div>

                <div >
                    <label>Contraseña</label>
                    <input required type='password' name='password' value={password} className='form-control' placeholder='Contraseña' onChange={(e) => { setPassword(e.target.value) }} />

                </div>
                <div >
                    <label>Confirme Contraseña</label>
                    <input required type='password' name='confirmPassword' value={confirmPassword} className='form-control' placeholder='Confirme Contraseña' onChange={(e) => { setConfirmPassword(e.target.value) }} />

                </div>
                <button onClick={register} style={{ marginTop: '20px', marginBottom:'20px'}} className='btn btn-warning'>Registrarse</button>
                <br/>
                <Link to={'/login'}>¿Ya tiene una cuenta? Iniciar sesión</Link>
            </div>
        </div>
    )
}

export default CreateUser;