import React, { useState } from 'react';
import { agregarOrden } from '../actions/OrdenActions';
import { Card, Modal, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';

const Menu = ({ menu }) => {
    const navigate = useNavigate();     
    const [quantity, setQuantity] = useState(1);

    //estado show y funciones para el elemento Modal, que se muestre(true) o no (false)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();

    function agregarorden() {
        dispatch(agregarOrden(menu, quantity))
        Swal.fire({
            icon: 'success',
            title: '¡Genial!',
            text: '¡Se ha agregado tu Orden!',
        })
        navigate('/orden');
    }


    return (
        <div key={menu._id}>
            <Card style={{ height: '458px' }}>
                <Link>
                    <img src={menu.image} className='card-img-top ' style={{ height: '200px' }} alt='img' />
                </Link>
                <Card.Body >
                    <Card.Title style={{ fontSize: "20px", fontWeight: 'bold', textAlign: 'center' }}>
                        {menu.name}
                    </Card.Title>

                    <Card.Text style={{ fontStyle: 'italic', fontSize: "15px", fontWeight: 'bold', textAlign: 'center' }}>
                        <Link onClick={handleShow}> Descripción del Producto</Link>
                    </Card.Text>
                    <Card.Text className='mt-1 fw-bold' style={{ fontSize: "15px", textAlign: 'center' }}>
                        <span style={{marginBottom:'10px'}}>Precio: {menu.price*quantity} Gs.</span>
                        <span style={{display:'flex', flexDirection:'row', justifyContent: 'center', alignItems:'center', marginTop:'15px'}}>
                            <span style={{fontSize: "15px", marginRight:'20px'}}>Cantidad</span>
                            <select className='form-control' style={{width:'80px', border:'1px solid #fec800'}} value={quantity} onChange={(e)=>{setQuantity(e.target.value)}}>
                                {[...Array(10).keys()].map((x, i) => {
                                    return <option value={i + 1} key={i}>{i + 1}</option>
                                })}
                            </select>
                        </span>
                    </Card.Text>
                    
                    
                    <div className='w-100 m-1 d-flex justify-content-center align-items-center'>
                        
                        <Button onClick={agregarorden} className='btn btn-warning' >Agregar a orden</Button>
                    </div>
                </Card.Body>        
                

            </Card>

            <Modal show={show}>
                <Modal.Header >
                    <Modal.Title>{menu.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className='d-flex flex-column align-items-center'>
                        <img src={menu.image} style={{ height: "300px", width: "300px", marginTop: '10px' }} />
                        <span style={{ marginLeft: '50px', marginTop: '10px', fontSize: '20px' }}>{menu.description}</span>
                    </div>
                    
                </Modal.Body>

                <Modal.Footer>
                    <button className='btn btn-danger' onClick={handleClose}>Cerrar</button>

                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default Menu