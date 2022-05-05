import React from 'react';
import { Nav, Navbar, Offcanvas, Container } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

import Dao from "../../pages/dao";
import Home from "../../pages/home";
import Wallet from "../../pages/wallet";
import Staking from "../../pages/staking";
import Ico from "../../pages/ico";
import './nav.css'
export default function NavType() {


    return (
        <Router>
        <Navbar bg="light" expand={false}>
            <Container fluid>
                <Navbar.Brand href="#">OneEyeOpen</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
                >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <Nav.Link  className='nav-link' href="/">Home</Nav.Link>
                        <Nav.Link href="/dao">Dao</Nav.Link>
                        <Nav.Link href="/ico">Ico</Nav.Link>
                        <Nav.Link href="/wallet">Wallet</Nav.Link>
                        <Nav.Link href="/staking">Staking</Nav.Link>

                    </Nav>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/dao" element={<Dao/>}/>
                <Route path="/ico" element={<Ico/>}/>
                <Route path="/wallet" element={<Wallet/>} />
                <Route path="/staking" element={<Staking/>} />            
            </Routes>
        </Router>
    );
}