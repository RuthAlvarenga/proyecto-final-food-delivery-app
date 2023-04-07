import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Badge from 'react-bootstrap/Badge';
import hamburger from '../navbar/hamburger.png';
import NavDropdown from 'react-bootstrap/NavDropdown'
import { logoutUsuario } from '../../actions/UsuarioActions';
import '../navbar/Nav.css'

const NavBar = () => {

    const ordenState = useSelector(state => state.ordenRed);
    const userstate = useSelector(state => state.usuarioLoginReducer);
    const { currentUser } = userstate;
    const dispatch = useDispatch();

    return (
        <div>
            <nav style={{ backgroundColor: "#fec800" }} className="navbar navbar-expand-lg mb-4" >
                <div>
                    <img src={hamburger} className='img mb-2' style={{width: "50px", height: "50px", marginLeft: '15px'}} />
                    <a className="navbar-brand text-black mx-2 " style={{fontFamily: 'navfont', fontSize: '40px'}} href="/">Delicius Hamburger</a>
                </div>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse mx-2" id="navbarNav">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                        <li className="nav-item fs-4">
                            <Link className="nav-link text-black" to={'/'}>Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-black fs-4" to={'/orden'}>
                                Orden
                                {
                                    ordenState.ordenItems.length > 0 && (
                                        <Badge pill bg='danger'>
                                            {ordenState.ordenItems.length}
                                        </Badge>
                                    )
                                }

                            </Link>
                        </li>
                        {currentUser ?
                            (<NavDropdown className='fs-4 fw-bold' title={currentUser.name} id='basic-nav-dropdown' >
                                    
                            <NavDropdown.Item ><Link style={{textDecoration:'none', color: 'black'}}to={'/pedidos'}>Ordenes</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item 
                                to={'/login'}
                                onClick={()=>{dispatch(logoutUsuario())}}
                                >Logout</NavDropdown.Item>
                            </NavDropdown>
                            )
                            :
                            <li className="nav-item fs-4">

                                <Link className="nav-link text-black" to={'/login'}>Login</Link>
                            </li>

                        }

                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar