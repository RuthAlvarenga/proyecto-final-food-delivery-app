import React from 'react'
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavBar from '../components/navbar/NavBar';



const Layout = () => {
    return (
        <>  
                <NavBar />
                <Container>
                    <Outlet />
                </Container>
        </>
    )
}

export default Layout;