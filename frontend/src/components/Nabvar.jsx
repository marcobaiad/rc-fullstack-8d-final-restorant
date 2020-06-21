import React from 'react';
import '../Css/navbar.css'
import Carousel from 'react-bootstrap/Carousel';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import nabvarjs from './navbar';

const Nabvar = () => {

    window.onscroll = function () { nabvarjs() };

    return (
        <div className="d-flex flex-wrap">
            <Carousel controls={false} indicators={false}>
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
                <Navbar variant="dark" className="px-0 py-2 mb-3 mb-lg-4 navbar-menu">
                    <Navbar.Brand className="d-none d-md-block ml-3">Food & Drinks</Navbar.Brand>
                    <Nav className="d-none d-sm-none d-md-flex d-lg-flex row">
                        <Nav.Link className="text-white hover-navbar" href="/">HOME</Nav.Link>
                        <Nav.Link className="text-white hover-navbar" href="#menu">MENU</Nav.Link>
                        <Nav.Link className="text-white hover-navbar" href="#deets">CONTACT</Nav.Link>
                        <Nav.Link className="text-white hover-navbar" href="#memes">ABOUT US</Nav.Link>
                    </Nav>
                    <Form className="w-100 px-2 mt-4 d-md-none">
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Control className="drop-menu text-white" as="select" custom>
                                <option>HOME</option>
                                <option>MENU</option>
                                <option>CONTACT</option>
                                <option>ABOUT US</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Navbar>
            </div>
        </div>
    )
}

export default Nabvar