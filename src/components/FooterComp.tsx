import { Container, Row, Col, Nav, NavLink } from "react-bootstrap";


const Footer = () => {
    return (
        <footer>
            <Container fluid>
                <Row className="text-dark p-4" style={{ backgroundColor: 'wheat'}}>
                    <Col
                        className="d-flex align-items-center justify-content-center"
                        style={{ height: '90px' }}
                    >
                        <p className="fw-bold" style={{ fontSize: '25px', marginTop: '10px' }}>
                            KB Official
                        </p>
                        <Nav className="flex-row" style={{ fontSize: '23px' }}>
                            <NavLink href="/" className="text-dark">
                                Home
                            </NavLink>
                            <Nav.Item style={{ marginTop: '7px' }}>|</Nav.Item>
                            <NavLink href="/contact" className="text-dark">
                                Contacts
                            </NavLink>
                            <Nav.Item style={{ marginTop: '7px' }}>|</Nav.Item>
                            <NavLink href="/achieve" className="text-dark">
                                Achievements
                            </NavLink>
                            <Nav.Item style={{ marginTop: '7px' }}>|</Nav.Item>
                            <NavLink href="/aboutme" className="text-dark">
                                About me
                            </NavLink>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;