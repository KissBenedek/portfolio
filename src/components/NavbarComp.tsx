import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const NavbarComp = () => {
    return (
        <div id="navbar">
            <Navbar expand="md" className="position-absolute top-0 start-0 w-100 bg-dark">
                <Container>
                    <Navbar.Brand href="/" id="brand" className="text-white">
                        KB Official Page
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="d-flex align-items-center">
                        <Nav className="me-auto navgang">
                            <Nav.Link href="/contact" className="text-white">
                                Contacts
                            </Nav.Link>
                            <Nav.Link href="/achieve" className="text-white">
                                Achievements
                            </Nav.Link>
                            <Nav.Link href="/aboutme" className="text-white">
                                About me
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavbarComp;
