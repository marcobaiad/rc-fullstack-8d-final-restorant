import React from 'react';
import '../Css/navbar.css';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';


const Nabvar = () => {

    const OnReg = () => {

        let carrousel = document.getElementById("carrousel");
        let navbar = document.getElementById("navbar");

        if (window.location.pathname.includes("reg") || window.location.pathname.includes("log")) {
            carrousel.classList.add("d-none");
            carrousel.classList.add("position-absolute");
            navbar.classList.remove("position-absolute");
        }

    }


    const StickyNav = () => {
        let navbar = document.getElementById("navbar");
        let carrousel = document.getElementById("carrousel");
        let sticky = navbar.offsetTop;

        if (window.pageYOffset >= sticky) {
            navbar.classList.add("position-fixed");
            navbar.classList.remove("align-self-end");
        }
        if (window.pageYOffset <= carrousel.clientHeight - (window.screen.width > 767 ? 80 : 160)) {
            navbar.classList.remove("position-fixed");
            navbar.classList.add("align-self-end");
        }

    }


    window.onload = OnReg
    window.onscroll = StickyNav

    return (
        <div className="d-flex flex-wrap">
            <Carousel controls={false} indicators={false} id="carrousel">
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-md-100 h-lg-100 carrousel-img"
                        src="https://files.slack.com/files-pri/THQU1MGPN-F015J862W6Q/bar-1713610_1920.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-md-100 h-lg-100 carrousel-img"
                        src="https://files.slack.com/files-pri/THQU1MGPN-F014XAH10F9/lamp-3489391_1920.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-md-100 h-lg-100 carrousel-img"
                        src="https://files.slack.com/files-pri/THQU1MGPN-F0161TJ79LY/pizza-2810589_1920.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div className="w-100 position-absolute align-self-end" id="navbar">
                <Navbar variant="dark" className="px-0 py-2 mb-3 mb-lg-4 navbar-menu row flex-wrap justify-content-center justify-content-md-between m-0">
                    <Nav className="d-none d-sm-none d-md-flex d-lg-flex row pl-5 order-2 order-md-1">
                        <Navbar.Brand className="d-none d-lg-block ml-3">Asturias Food & Drinks</Navbar.Brand>
                        <Nav.Link className="text-white hover-navbar" href="/">INICIO</Nav.Link>
                        <Nav.Link className="text-white hover-navbar" href="#menu">MENU</Nav.Link>
                        <Nav.Link className="text-white hover-navbar" href="#deets">CONTACTO</Nav.Link>
                        <Nav.Link className="text-white hover-navbar" href="#memes">SOBRE NOSOTROS</Nav.Link>
                    </Nav>
                    <Nav className="row mx-3 order-1 order-md-2 ">
                        <Nav.Link className="text-white hover-navbar" href="/reg">REGISTRO</Nav.Link>
                        <Nav.Link className="text-white hover-navbar" href="#menu"><i class="far fa-user"></i> INICIAR CESIÓN</Nav.Link>
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

export default Nabvar;