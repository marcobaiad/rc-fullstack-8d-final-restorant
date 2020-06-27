import React, { useState, useEffect } from 'react';
import '../Css/navbar.css';
import Auth from '../utils/auth';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import sweet from 'sweetalert2';

import Lampara from '../img/CarrouselNav/Lampara.jpg'
import Pizzas from '../img/CarrouselNav/Pizzas.jpg'
import Restorant from '../img/CarrouselNav/Restorant.jpg'

const Header = () => {

    const { pathname } = window.location;
    const isLogReg = pathname.includes("reg") || pathname.includes("log");


    const StickyNav = () => {
        let navbar = document.getElementById("navbar");
        let carrousel = document.getElementById("carrousel");
        let sticky = navbar.offsetTop;

        if (window.pageYOffset >= sticky) {
            navbar.classList.add("position-fixed");
            navbar.classList.remove("align-self-end");
        }

        if (carrousel) {
            if (window.pageYOffset <= carrousel.clientHeight - (window.screen.width > 767 ? 80 : 160)) {
                navbar.classList.remove("position-fixed");
                navbar.classList.add("align-self-end");
            }
        }

    }


    window.onload = StickyNav
    window.onscroll = StickyNav

    const [isLogedIn, SetIsLogedIn] = useState(false);
    const localToken = localStorage.getItem('token');        
    
    useEffect(() => {
        if (isLogedIn) {
            SetIsLogedIn(false)
        }
    }, [isLogedIn]);

    

    const LogUotHandler = async () => {   
        try {
            await axios.get(`/api/v1/usuarios/logout`, 
                {
                    headers: {
                        'authorization': 'Bearer ' + localToken
                    } 
                }
            );
            SetIsLogedIn(true);
            console.log('Despues del try' + isLogedIn);
            localStorage.removeItem('token')
        } catch (e) {
            sweet.fire({
                icon: 'error',
                title: 'No se pudo registrar'
            });
        }
    }

    /* const onchangeSelectHandler = (e) => {
        
    } */
    
    return (
        <div className="d-flex flex-wrap">
            {!isLogReg &&
                <Carousel controls={false} indicators={false} id="carrousel">
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-md-100 h-lg-100 carrousel-img"
                            src={Restorant}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-md-100 h-lg-100 carrousel-img"
                            src={Lampara}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-md-100 h-lg-100 carrousel-img"
                            src={Pizzas}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            }
            <div className="w-100 position-absolute align-self-end" id="navbar">
                <Navbar variant="dark" className="px-0 py-2 mb-3 mb-lg-4 navbar-menu row flex-wrap justify-content-center justify-content-md-between m-0">
                    <Nav className="d-none d-sm-none d-md-flex d-lg-flex row pl-5 order-2 order-md-1">
                        <Navbar.Brand className="d-none d-lg-block ml-3">Asturias Food & Drinks</Navbar.Brand>
                        <Nav.Link className="text-white hover-navbar" href="/">INICIO</Nav.Link>
                        <Nav.Link className="text-white hover-navbar" href="menu">MENU</Nav.Link>
                        <Nav.Link className="text-white hover-navbar" href="#Contacto">CONTACTO</Nav.Link>
                        <Nav.Link className="text-white hover-navbar" href="#AboutUs">SOBRE NOSOTROS</Nav.Link>
                    </Nav>
                    <Nav className="row mx-3 order-1 order-md-2 ">

                        { Auth.isAuthenticated() ? 
                            <Nav.Link className="text-white hover-navbar" onClick={LogUotHandler}><i className="far fa-user"></i> CERRAR CESIÓN</Nav.Link>
                            :
                            <>
                                <Nav.Link className="text-white hover-navbar" href="/reg">REGISTRO</Nav.Link>
                                <Nav.Link className="text-white hover-navbar" href="/log"><i className="far fa-user"></i> INICIAR CESIÓN</Nav.Link> 
                            </>
                        }

                    </Nav>
                    <Form className="w-100 px-2 mt-4 d-md-none">
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Control className="drop-menu text-white" as="select" custom>
                                <option>INICIO</option>
                                <option>MENU</option>
                                <option>CONTACTO</option>
                                <option>SOBRE NOSOTROS</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Navbar>
            </div>
        </div>
    )
}

export default Header;
