import React, { useState, useRef, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';

const Nabvar = () => {

    return (
        <div className="d-flex flex-wrap">
            <Carousel controls={false} indicators={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{ maxHeight: "100vh", height: "100vh", objectFit: "cover" }}
                        src="https://files.slack.com/files-pri/THQU1MGPN-F015J862W6Q/bar-1713610_1920.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-md-100 h-lg-100"
                        style={{ maxHeight: "100vh", height: "100vh", objectFit: "cover" }}
                        src="https://files.slack.com/files-pri/THQU1MGPN-F014XAH10F9/lamp-3489391_1920.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-md-100 h-lg-100"
                        style={{ maxHeight: "100vh", height: "100vh", objectFit: "cover" }}
                        src="https://files.slack.com/files-pri/THQU1MGPN-F0161TJ79LY/pizza-2810589_1920.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div className="w-100 position-absolute align-self-end" >
                <Navbar variant="dark" className="px-0 py-2 position-relative mb-3 mb-lg-5" style={{ background: "rgba(0,0,0,0.7)", borderBottom: "1px solid #333" }}>
                    <Navbar.Brand className="d-none d-md-block ml-3">Food & Drinks</Navbar.Brand>
                    <Nav className="mr-auto d-none d-sm-none d-md-flex d-lg-flex" style={{ flexDirection: "row" }}>
                        <Nav.Link className="mx-2" href="#features">Inicio</Nav.Link>
                        <Nav.Link className="mx-2" href="#pricing">Menu</Nav.Link>
                        <Nav.Link className="mx-2" href="#deets">Locales</Nav.Link>
                        <Nav.Link className="mx-2" href="#memes">Delivery</Nav.Link>
                    </Nav>
                    <Form className="w-100 px-2 mt-4 d-md-none">
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Control as="select" custom style={{ background: "#333", color: "white" }}>
                                <option>Inicio</option>
                                <option>Menu</option>
                                <option>Locales</option>
                                <option>Delivery</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Navbar>
            </div>
        </div>
    )
}

export default Nabvar