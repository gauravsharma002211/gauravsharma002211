import { Col, Container, Nav, NavLink, Row } from "react-bootstrap";


const Footer = () => {
    return (
        <>
            <footer className="footer">
                <Container>
                    <Row>
                        <Col md={3} sm={6}>
                            <h3 className="title-widget">Hot Links</h3>
                            <div className="quitck-link">
                                <Nav.Link href="#">About Us</Nav.Link>
                                <Nav.Link href="#">Careers</Nav.Link>
                                <Nav.Link href="#">Media Center</Nav.Link>
                                <Nav.Link href="#">Partner Program</Nav.Link>
                                <Nav.Link href="#">Affiliate Program</Nav.Link>
                                <Nav.Link href="#">FAQs</Nav.Link>
                                <Nav.Link href="#">Sitemap</Nav.Link>
                                <Nav.Link href="#">Claims</Nav.Link>
                                <Nav.Link href="#">Get Started</Nav.Link>
                                <Nav.Link href="#">Sign In</Nav.Link>
                            </div>
                        </Col>
                        <Col md={3} sm={6}>
                            <h3 className="title-widget">Contact Us</h3>
                            <div className="contact-info">
                                <div className="contact-list">
                                    <p>General Inquiries</p>
                                    <Nav.Link href="tel:98765 543210">98765 543210</Nav.Link>
                                </div>
                                <div className="contact-list">
                                    <p>Press Inquiries</p>
                                    <Nav.Link href="tel:98765 543210">98765 543210</Nav.Link>
                                </div>
                                <div className="contact-list">
                                    <Nav.Link href="mailto:hello@covrzy.comlaims">hello@covrzy.comlaims</Nav.Link>
                                    <Nav.Link href="tel:1 844 436 2765">1 844 436 2765</Nav.Link>
                                    <Nav.Link href="javascript:void(0)">Mon-Fri 6am-6pm PT</Nav.Link>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} sm={6}>
                            <h3 className="title-widget">Usefull Links</h3>
                            <div className="contact-info">
                                <div className="contact-list">
                                    <p>General Inquiries</p>
                                    <Nav.Link href="mailto:hello@covrzy.com">hello@covrzy.com</Nav.Link>
                                </div>
                                <div className="contact-list">
                                    <p>Broker Partner Inquiries</p>
                                    <Nav.Link href="mailto:brokers@covrzy.com">brokers@covrzy.com</Nav.Link>
                                </div>
                                <div className="contact-list">
                                    <p>VCs & Partnerships</p>
                                    <Nav.Link href="mailto:partnerships@covrzy.com">partnerships@covrzy.com</Nav.Link>
                                </div>
                                <div className="contact-list">
                                    <p>Press</p>
                                    <Nav.Link href="mailto:press@covrzy.com">press@covrzy.com</Nav.Link>
                                </div>
                                <div className="contact-list">
                                    <p>Security Inquiries</p>
                                    <Nav.Link href="mailto:security@covrzy.com">security@covrzy.com</Nav.Link>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} sm={6}>
                            <h3 className="title-widget">Meet Us</h3>
                            <div className="address">
                                <p>
                                    San Francisco 5214F Diamond Heights Blvd Unit #1261 San Francisco, CA 94131
                                </p>
                                <div className="social-media">
                                    <Nav.Link href="#"><i className="fa fa-instagram" aria-hidden="true"></i></Nav.Link>
                                    <Nav.Link href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></Nav.Link>
                                    <Nav.Link href="#"><i className="fa fa-facebook" aria-hidden="true"></i></Nav.Link>
                                    <Nav.Link href="#"><i className="fa fa-envelope" aria-hidden="true"></i></Nav.Link>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
            <div className="copyright-section">
                <Container>
                    <Row>
                        <Col md={6}><p>© 2022 COVRZY Insurance Services, LLC. All rights reserved.</p></Col>
                        <Col md={6}>
                            <div className="copyright-link">
                                <Nav.Link href="#">Terms</Nav.Link>
                                <Nav.Link href="#">Privacy</Nav.Link>
                                <Nav.Link href="#">Licenses</Nav.Link>
                                <Nav.Link href="#">Disclosure</Nav.Link>
                            </div>
                        </Col>
                        <Col md={12}><p className="text-center">The information provided on this website does not constitute insurance advice. All content and materials are for general informational purposes only.
                            Complete COVRZY’s online application and contact one of our licensed insurance professionals to obtain advice for your specific business insurance needs.
                        </p></Col>
                    </Row>
                </Container>
            </div>
        </>

    )
}

export default Footer;