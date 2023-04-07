import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import {agregarOrden} from '../actions/OrdenActions'
import { eliminarOrden } from '../actions/OrdenActions';
import Checkout from '../components/Checkout';

const Orden = () => {
    const ordenstate = useSelector(state => state.ordenRed);
    const ordenItems = ordenstate.ordenItems;
    var pagTotal = ordenItems.reduce((x, item) => x + item.prices, 0)
    const dispatch = useDispatch();
    return (
        <div>

            <div>
                <h1>Mi Orden </h1>
                <Row>
                    <Col md={8}>


                        <ListGroup>
                            {ordenItems.map((item) => (
                                <ListGroup.Item key={item._id}>
                                    <Row className='align-items-center'>
                                        <Col md={4}>
                                            <img src={item.image} alt={item.name} className='img-fluid rounded ' style={{ height: '100px', width: '100px', marginBottom: '8px', marginTop: '8px' }}>
                                            </img>{' '}
                                            <h5>{item.name}</h5>
                                        </Col>
                                        <Col md={3}>

                                            <Button
                                                style={{ backgroundColor: '#fec800', borderRadius: '50px' }}
                                                variant='ligth'
                                                onClick={()=>{dispatch(agregarOrden(item, item.quantity-1))}}
                                                disabled={item.quantity === 1}


                                            >
                                                <i className="fa-solid fa-minus"></i>
                                            </Button>{' '}
                                            <span className='fw-bold'>{item.quantity}</span>{' '}
                                            <Button
                                                style={{ backgroundColor: '#fec800', borderRadius: '50px' }}
                                                variant='ligth'
                                                onClick={()=>{dispatch(agregarOrden(item, item.quantity+1))}}
                                                disabled={item.quantity === 10}
                                            >
                                                <i className="fa-solid fa-plus"></i>
                                            </Button>{' '}
                                        </Col>
                                        <Col md={3} className='fw-bold'>{item.prices} Gs.</Col>
                                        <Col md={2}>
                                            <Button style={{ backgroundColor: '#fec800', borderRadius: '50px' }}
                                                variant='ligth'
                                                onClick={() => { dispatch(eliminarOrden(item)) }}
                                            >
                                                <i className="fa-solid fa-trash"></i>
                                            </Button>{' '}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>



                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <ListGroup varient='flush' />
                                <ListGroup.Item>
                                    <h3>
                                        Total: {pagTotal} Gs.
                                    </h3>
                                </ListGroup.Item>
                                <ListGroup.Item>    
                                    <Checkout pagTotal={pagTotal} disabled={ordenItems.length === 0}/>        
                                </ListGroup.Item>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>


            </div>
        </div>
    )
}

export default Orden;

