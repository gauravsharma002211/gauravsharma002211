import React, { useState } from 'react'
import { Col, Container, Form, Nav, Navbar, NavDropdown, Row, Button } from 'react-bootstrap';
import logo from '../../assets/images/logo.svg';
import search from '../../assets/images/search.svg';
import searchWhite from '../../assets/images/Search-white.svg';

import CustomButton from '../Buttons/CustomButton';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const [openSearch, setOpenSearch] = useState(false);
    return (
        <>
            <header>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className='justify-content-end' id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <NavDropdown className='mega-menu-wrp' title="Products" id="collasible-nav-dropdown">
                                <div className='mega-menu-box'>
                                    <Container>
                                        <Row>
                                            <Col lg={6}>
                                                <h3 className='mega-menu-title'>Insurance for</h3>
                                                <Row>
                                                    <Col lg={6}>
                                                        <div className='mega-menu-list'>
                                                            <NavDropdown.Item href="#">Startups <em>(VC Funded)</em></NavDropdown.Item>
                                                            <NavDropdown.Item href="#">Tech Companies <em>(Not VC Funded)</em></NavDropdown.Item>
                                                            <NavDropdown.Item href="#">Law Firms</NavDropdown.Item>
                                                            <NavDropdown.Item href="#">VC & Private Equity Firms</NavDropdown.Item>
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className='mega-menu-list'>
                                                            <NavDropdown.Item href="#">Cannabis Companies <span>NEW</span></NavDropdown.Item>
                                                            <NavDropdown.Item href="#">Aviation & Aerospace <span>NEW</span></NavDropdown.Item>
                                                            <NavDropdown.Item href="#">Small Businesses</NavDropdown.Item>
                                                            <NavDropdown.Item href="#">ALL INDUSTRIES  <i className="fa fa-angle-right" aria-hidden="true"></i></NavDropdown.Item>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col lg={6}>
                                                <h3 className='mega-menu-title'>Policies</h3>
                                                <Row>
                                                    <Col lg={6}>
                                                        <div className='mega-menu-list'>
                                                            <NavDropdown.Item href="#">Startups <em>(VC Funded)</em></NavDropdown.Item>
                                                            <NavDropdown.Item href="#">Tech Companies <em>(Not VC Funded)</em></NavDropdown.Item>
                                                            <NavDropdown.Item href="#">Law Firms</NavDropdown.Item>
                                                            <NavDropdown.Item href="#">VC & Private Equity Firms</NavDropdown.Item>
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className='mega-menu-list'>
                                                            <NavDropdown.Item href="#">Cannabis Companies <span>NEW</span></NavDropdown.Item>
                                                            <NavDropdown.Item href="#">Aviation & Aerospace <span>NEW</span></NavDropdown.Item>
                                                            <NavDropdown.Item href="#">Small Businesses</NavDropdown.Item>
                                                            <NavDropdown.Item href="#">ALL INDUSTRIES <i className="fa fa-angle-right" aria-hidden="true"></i></NavDropdown.Item>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </NavDropdown>
                            <Nav.Link href="#">About Us</Nav.Link>
                            <Nav.Link href="#">Partners</Nav.Link>
                            <NavDropdown className='mega-menu-wrp' title="Resources" id="collasible-nav-dropdown">
                                <div className='mega-menu-box'>
                                    <Container>
                                        <Row>
                                            <Col lg={6}>
                                                <h3 className='mega-menu-title'>Insurance for</h3>
                                                <Row>
                                                    <Col lg={6}>
                                                        <div className='mega-menu-list'>
                                                            <NavDropdown.Item href="#">Startups <em>(VC Funded)</em></NavDropdown.Item>
                                                            <NavDropdown.Item href="#">Tech Companies <em>(Not VC Funded)</em></NavDropdown.Item>
                                                            <NavDropdown.Item href="#">Law Firms</NavDropdown.Item>
                                                            <NavDropdown.Item href="#">VC & Private Equity Firms</NavDropdown.Item>
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className='mega-menu-list'>
                                                            <NavDropdown.Item href="#">Cannabis Companies <span>NEW</span></NavDropdown.Item>
                                                            <NavDropdown.Item href="#">Aviation & Aerospace <span>NEW</span></NavDropdown.Item>
                                                            <NavDropdown.Item href="#">Small Businesses</NavDropdown.Item>
                                                            <NavDropdown.Item href="#">ALL INDUSTRIES <i className="fa fa-angle-right" aria-hidden="true"></i></NavDropdown.Item>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col lg={6}>
                                                <h3 className='mega-menu-title'>Policies</h3>
                                                <Row>
                                                    <Col lg={6}>
                                                        <div className='mega-menu-list'>
                                                            <NavDropdown.Item href="#">Startups <em>(VC Funded)</em></NavDropdown.Item>
                                                            <NavDropdown.Item href="#">Tech Companies <em>(Not VC Funded)</em></NavDropdown.Item>
                                                            <NavDropdown.Item href="#">Law Firms</NavDropdown.Item>
                                                            <NavDropdown.Item href="#">VC & Private Equity Firms</NavDropdown.Item>
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className='mega-menu-list'>
                                                            <NavDropdown.Item href="#">Cannabis Companies <span>NEW</span></NavDropdown.Item>
                                                            <NavDropdown.Item href="#">Aviation & Aerospace <span>NEW</span></NavDropdown.Item>
                                                            <NavDropdown.Item href="#">Small Businesses</NavDropdown.Item>
                                                            <NavDropdown.Item href="#">ALL INDUSTRIES <i className="fa fa-angle-right" aria-hidden="true"></i></NavDropdown.Item>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </NavDropdown>
                        </Nav>
                        <div className='signin-wrp'>
                            <div className='search-bar'>
                                <div className="search-icon" id="search" onClick={() => setOpenSearch(!openSearch)}><img src={search} /></div>
                                <div className={openSearch ? "search_box active" : "search_box"} id="search_box">
                                    <Form.Control type="text" name="search_criteria" placeholder="Search by keyword" />
                                    <Button><img src={searchWhite} /></Button>
                                </div>
                            </div>
                            <a className='signin-btn' onClick={() => { navigate("sign-in") }}>Sign In</a>
                            <CustomButton buttonTitle="GET STARTED" />
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </header>
        </>

    )
}

export default Header;